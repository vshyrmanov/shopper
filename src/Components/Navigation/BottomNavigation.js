import { StyledAddButton } from "./Styled";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from "react-redux";
import SwapDrawer from "./SwapDrawer";
import { Form } from '../Form';
import { navigationHelper } from "./helper";

const BottomNavigation = () => {
    const dispatch = useDispatch();
    const helper = navigationHelper({dispatch});

    return (
        <>
            <StyledAddButton className={`animate__animated animate__fadeIn`}>
                <AddCircleIcon onClick={helper.toggleSwapper} />
            </StyledAddButton>
            <SwapDrawer>
                <Form />
            </SwapDrawer>
        </>
    )
}

export default BottomNavigation;