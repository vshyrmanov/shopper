import {ListItems as List} from '../List/List';
import {useParams} from "react-router-dom";
import Lists from "../Lists/Lists";


const ListItems = () => {
    const params = useParams();

    return (
            <List owner={params.id} />

    )
}

export default ListItems;