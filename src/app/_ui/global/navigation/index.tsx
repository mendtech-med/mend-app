import Routes from "./routes";


const Item = ({ route }: { route: Route }) => {
    return (
        <div className="item">
            <route.icon />
            <span>{route.name}</span>
        </div>
    );
}



const Navigation = () => {
    return (
        <div className="navigation">
            <
        </div>
    );
}

export default Navigation;