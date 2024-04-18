import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//importing components
import SliderToggle from "../SliderToggle/sliderToggle";
import BoxWithDropshadow from "../boxWithDropshadow";
import TextBox from "../textBox";
import TextArea from "../textArea";
import ButtonWhite from "../buttons/buttonWhite";
import ImageTile from "../ImageUpload/ImageTile";
import PinnedBar from "../PinnedBar";

const UpdateMouldingForm = () => {
  const [error, setError] = useState("");
  const [thisMoulding, setMoulding] = useState({
    name: "",
    profile: "",
    images: [],
    finish: "",
    colour: "",
    timber: "",
    archived: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  //prefills sections of the form
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const getProductDetails = async (id) => {
    const response = await fetch(`/api/Stock/${id}`);
    const singleStock = await response.json();
    setMoulding({
      name: singleStock.name,
      profile: singleStock.profile,
      images: singleStock.images,
      finish: singleStock.finish,
      colour: singleStock.colour,
      timber: singleStock.timber,
      archived: singleStock.archived,
      description: singleStock.description,
    });
  };

  //Handle the update of the stock
  const handleSubmit = async (e) => {
    e.preventDefault();

    const stock = thisMoulding;

    const response = await fetch(`/api/mattebaord/${id}`, {
      method: "PATCH",
      body: JSON.stringify(stock),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      alert("Moulding Updated Successfully");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/Moulding/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      setError(error.message);
    }
    if (response.ok) {
      alert("Moulding Deleted");
      setError(null);
      console.log("Moulding item deleted successfully");
      navigate("/ViewMoulding");
    }
  };

  return (
    <form style={styles.StockCreationForm}>
      <div style={styles.leftSide}>
        <BoxWithDropshadow>
          <h2>Description</h2>
          <div style={styles.stockDescription}>
            <TextBox
              id={"name"}
              name={"Name:"}
              defaultValue={thisMoulding.name}
              thisHeight={"40px"}
              onChange={(e) => setMoulding({ ...thisMoulding, name: e.target.value })}
            />
            <TextArea
              formId={"description"}
              name={"description:"}
              thisHeight={"120px"}
              onChange={(e) =>
                setMoulding({ ...thisMoulding, description: e.target.value })
              }
              value={thisMoulding.description}
            />
          </div>
        </BoxWithDropshadow>

        <BoxWithDropshadow style={styles.images}>
          <h2>Images</h2>
          <ImageTile
            onImageListChange={(e) => setMoulding({ ...thisMoulding, images: e })}
            imageList={thisMoulding.images}
          />
        </BoxWithDropshadow>
        <BoxWithDropshadow>
          <h2>Details</h2>
          <div style={styles.details}>
            <TextBox
              id={"profile:"}
              name={"profile:"}
              onChange={(e) =>
                setMoulding({ ...thisMoulding, profile: e.target.value })
              }
              defaultValue={thisMoulding.profile}
              thisHeight={"40px"}
            />
            <TextBox
              id={"finish:"}
              name={"finish:"}
              onChange={(e) =>
                setMoulding({ ...thisMoulding, finish: e.target.value })
              }
              defaultValue={thisMoulding.finish}
              thisHeight={"40px"}
            />
            <TextBox
              id={"colour:"}
              name={"colour:"}
              onChange={(e) =>
                setMoulding({ ...thisMoulding, colour: e.target.value })
              }
              defaultValue={thisMoulding.colour}
              thisHeight={"40px"}
            />
            <TextBox
              id={"materials:"}
              name={"materials:"}
              onChange={(e) =>
                setMoulding({ ...thisMoulding, materials: e.target.value })
              }
              defaultValue={thisMoulding.materials}
              thisHeight={"40px"}
            />
          </div>
        </BoxWithDropshadow>
      </div>
      <div style={styles.rightSide}>
        <BoxWithDropshadow style={styles.archived}>
          <h2>Archived</h2>
          <SliderToggle
            children={"archived"}
            toggleId={"archived"}
            toggleName={"archived"}
            onChange={(e) =>
              setMoulding({ ...thisMoulding, archived: e.target.value })
            }
            value={thisMoulding.archived}
          />
        </BoxWithDropshadow>
        <BoxWithDropshadow>
          <div style={styles.finalButtons}>
            <ButtonWhite
              children={"delete this listing"}
              onClick={handleDelete}
            />
          </div>
        </BoxWithDropshadow>
        {error && <div>{error}</div>}
      </div>
      <PinnedBar save={handleSubmit} />
    </form>
  );
};

const styles = {
  StockCreationForm: {
    display: "flex",
    gap: "20px",
  },
  leftSide: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    gap: "20px",
  },
  stockDescription: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  images: {},
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightSide: {
    display: "flex",
    width: "30%",
    flexDirection: "column",
    gap: "20px",
  },
  archived: {

  },
  finalButtons: {
    display: "flex",
    flexDirection: "column",
  },
};

export default UpdateMouldingForm;
