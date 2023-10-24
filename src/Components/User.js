const DEFAULT_IMG = "https://via.placeholder.com/32x32.png";

//Funzione per verificare l'img
const getImgOrDefault = (img) => {
  try {
    new URL(img);
    return img;
  } catch (error) {
    return DEFAULT_IMG;
  }  
}

const User = (props) => {
    const {id, name, img} = props.user;

    return (
        <div className="d-flex align-items-center text-black text-decoration-none py-1">
            <img 
                src={getImgOrDefault(img)}
                width="32"
                height="32"
                className="rounded-circle me-2"
                alt="user"
            />
            <strong>{name}</strong>
        </div>
    )
}

export default User;