const Header = ({title} : {title : string}) => {
    return (
        <h3 className="trackerHeading">
            {title}
        </h3>
    );
}

export default Header;