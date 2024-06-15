
function ProfilePicture() {
    const imgUrl = './src/assets/bender.jpg';
    const handleClick = (e) => e.target.style.display = "none";
    return (<img onClick={(e) => handleClick(e)} src={imgUrl} />);
}

export default ProfilePicture