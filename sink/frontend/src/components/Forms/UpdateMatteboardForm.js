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

const UpdateMatteboardForm = () => {
  const [error, setError] = useState("");
  const [thisMatteboard, setMatteboard] = useState({
    name: "",
    depth: "",
    colours: "",
    finish: "",
    material: "",
    archived: "",
    description: "",
    images: [],
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
    setMatteboard({
      name: singleStock.name,
      depth: singleStock.depth,
      colours: singleStock.colours,
      finish: singleStock.finish,
      material: singleStock.material,
      archived: singleStock.archived,
      description: singleStock.description,
      images: singleStock.images,
    });
  };

  //Handle the update of the stock
  const handleSubmit = async (e) => {
    e.preventDefault();

    const stock = thisMatteboard;

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
      alert("Matteboard Updated Successfully");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/matteboard/${id}`, {
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
      alert("Matteboard Deleted");
      setError(null);
      console.log("Matteboard item deleted successfully");
      navigate("/ViewMatteboard");
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
              defaultValue={thisMatteboard.name}
              thisHeight={"40px"}
              onChange={(e) => setMatteboard({ ...thisMatteboard, name: e.target.value })}
            />
            <TextArea
              formId={"description"}
              name={"description:"}
              thisHeight={"120px"}
              onChange={(e) =>
                setMatteboard({ ...thisMatteboard, description: e.target.value })
              }
              value={thisMatteboard.description}
            />
          </div>
        </BoxWithDropshadow>

        <BoxWithDropshadow style={styles.images}>
          <h2>Images</h2>
          <ImageTile
            onImageListChange={(e) => setMatteboard({ ...thisMatteboard, images: e })}
            imageList={thisMatteboard.images}
          />
        </BoxWithDropshadow>
        <BoxWithDropshadow>
          <h2>Details</h2>
          <div style={styles.details}>
            <TextBox
              id={"depth:"}
              name={"depth:"}
              onChange={(e) =>
                setMatteboard({ ...thisMatteboard, depth: e.target.value })
              }
              defaultValue={thisMatteboard.depth}
              thisHeight={"40px"}
            />
            <TextBox
              id={"colours:"}
              name={"colours:"}
              onChange={(e) =>
                setMatteboard({ ...thisMatteboard, colours: e.target.value })
              }
              defaultValue={thisMatteboard.colours}
              thisHeight={"40px"}
            />
            <TextBox
              id={"finish:"}
              name={"finish:"}
              onChange={(e) =>
                setMatteboard({ ...thisMatteboard, finish: e.target.value })
              }
              defaultValue={thisMatteboard.finish}
              thisHeight={"40px"}
            />
            <TextBox
              id={"material:"}
              name={"material:"}
              onChange={(e) =>
                setMatteboard({ ...thisMatteboard, material: e.target.value })
              }
              defaultValue={thisMatteboard.material}
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
              setMatteboard({ ...thisMatteboard, archived: e.target.value })
            }
            value={thisMatteboard.archived}
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

export default UpdateMatteboardForm;
