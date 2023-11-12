import { FC, useEffect, useState } from "react"
import type { Planet, PlanetSite } from "../../componentTypes"
import { useNavigate, useParams } from "react-router-dom";
const PlanetSite: FC<PlanetSite> = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState<Planet>();
    const navigate = useNavigate();


    const getPlanet = async () => {
        if (id) {
            const url = `https://swapi.dev/api/planets/${id}`;
            const response: Response = await fetch(url);
            const searchResponse: Planet = await response.json();
            setPlanet(searchResponse)
        }
    }
const sideBarClose = () => {
    props.setPanelAppear(true)
    navigate('/')
}


    useEffect(()=> {
        getPlanet()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    return (
        <div>
            <button onClick={sideBarClose}>Close</button>
            <h1>{planet?.name}</h1>
            <p>{planet?.diameter}</p>
        </div>
    )
}

export default PlanetSite