import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//importing components
import SliderToggle from "../SliderToggle/sliderToggle";
import BoxWithDropshadow from "../boxWithDropshadow";
import TextBox from "../textBox";
import TextArea from "../textArea";
import FauxCheckButton from "../FauxRadioButton/FauxRadioButton";
import ButtonWhite from "../buttons/buttonWhite";
import ImageTile from "../ImageUpload/ImageTile";
import PinnedBar from "../PinnedBar";

const UpdateStockForm = () => {
  const [error, setError] = useState("");
  const [thisStock, setStock] = useState({
    name: "",
    description: "",
    images: [],
    dimensions: "",
    medium: "",
    artist: "",
    status: "",
    archived: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  //Creates the choices for the radio button
  //Creates the choices for the radio button
  const radioButtonChoices = [
    {
      value: "enquire",
      name: "enquire",
    },
    {
      value: "underNegotiation",
      name: "under negotiation",
    },
    {
      value: "sold",
      name: "sold",
    },
    {
      value: "showPrice",
      name: "show price",
    },
  ];

  //prefills sections of the form
  useEffect(() => {
    getProductDetails(id);

  }, []);

  const getProductDetails = async (id) => {
    const response = await fetch(`/api/Stock/${id}`);
    const singleStock = await response.json();
    setStock({
      name: singleStock.name,
      description: singleStock.description,
      images: singleStock.images,
      dimensions: singleStock.dimensions,
      medium: singleStock.medium,
      artist: singleStock.artist,
      status: singleStock.status,
      archived: true,
    });
  };

  //Handle the update of the stock
  const handleSubmit = async (e) => {
    e.preventDefault();

    const stock = thisStock;


    const response = await fetch(`/api/stock/${id}`, {
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
      alert("Stock Updated Successfully");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/stock/${id}`, {
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
      alert("Stock Deleted");
      setError(null);
      console.log("Stock item deleted successfully");
      navigate("/ViewStock");
    }
  };
  const handlePreview = (e) => {
    e.preventDefault()
    const itemJson = JSON.stringify(thisStock)

    const url = `/preview?stock=${encodeURIComponent(itemJson)}`
   
    window.open(url, "_blank", "noopener, noreferrer")
  } 

  return (
    <form style={styles.StockCreationForm}>
      <div style={styles.leftSide}>
        <BoxWithDropshadow>
          <h2>Description</h2>
          <div style={styles.stockDescription}>
            <TextBox
              id={"name"}
              name={"Name:"}
              defaultValue={thisStock.name}
              thisHeight={"40px"}
              onChange={(e) => setStock({ ...thisStock, name: e.target.value })}
            />
            <TextArea
              formId={"description"}
              name={"description:"}
              thisHeight={"120px"}
              onChange={(e) =>
                setStock({ ...thisStock, description: e.target.value })
              }
              value={thisStock.description}
            />
          </div>
        </BoxWithDropshadow>

        <BoxWithDropshadow style={styles.images}>
          <h2>Images</h2>
          <ImageTile
            onImageListChange={(e) => setStock({ ...thisStock, images: e })}
            imageList={thisStock.images}
          />
        </BoxWithDropshadow>
        <BoxWithDropshadow>
          <h2>Details</h2>
          <div style={styles.details}>
            <TextBox
              id={"dimensions:"}
              name={"dimensions:"}
              onChange={(e) =>
                setStock({ ...thisStock, dimensions: e.target.value })
              }
              defaultValue={thisStock.dimensions}
              thisHeight={"40px"}
            />
            <TextBox
              id={"medium:"}
              name={"medium:"}
              onChange={(e) =>
                setStock({ ...thisStock, medium: e.target.value })
              }
              defaultValue={thisStock.medium}
              thisHeight={"40px"}
            />
            <TextBox
              id={"artist:"}
              name={"artist:"}
              onChange={(e) =>
                setStock({ ...thisStock, artist: e.target.value })
              }
              defaultValue={thisStock.artist}
              thisHeight={"40px"}
            />
          </div>
        </BoxWithDropshadow>
      </div>
      <div style={styles.rightSide}>
        <BoxWithDropshadow style={styles.status}>
          <div style={styles.status}>
            <h2>Status</h2>
            <FauxCheckButton
              name={"status"}
              array={radioButtonChoices}
              onChange={(e) =>
                setStock({ ...thisStock, status: e.target.value })
              }
            />
            <TextBox
              id={"price"}
              name={"price:"}
              defaultValue={thisStock.price}
              thisHeight={"40px"}
              onChange={(e) =>
                setStock({ ...thisStock, price: e.target.value })
              }
            />
          </div>
        </BoxWithDropshadow>
        <BoxWithDropshadow style={styles.archived}>
          <h2>Archived</h2>
          <SliderToggle
            children={"archived"}
            toggleId={"archived"}
            toggleName={"archived"}
            onChange={(e) =>
              setStock({ ...thisStock, archived: e.target.value })
            }
            value={thisStock.archived}
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
      <PinnedBar save={handleSubmit} preview={handlePreview}/>
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
  status: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "0.3rem",
  },
  archived: {},
  finalButtons: {
    display: "flex",
    flexDirection: "column",
  },
};

export default UpdateStockForm;
