import { FC } from "react";
import accountServices from "../../../services/account";
import { AccountAction } from "../../../store/models/account.store";
import { useAppDispatch } from "../../../store";
import { IAccountInitialState } from "../../../models/account.model";
import { useNavigate } from "react-router-dom";

export type IProfileType = {
    identity: IAccountInitialState
};

const Profile: FC<IProfileType> = ({ identity }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const logout = async () => {
        try {
            await accountServices.Logout()
                .then(() => {
                    dispatch(AccountAction.ClearUserSession());
                    navigate('/');
                })
                .catch((error) => {
                    throw new Error(error);
                });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            throw new Error(error);
        }
    };
    return (
        <div className="text-center max-w-lg mx-auto ">
            Logged in as {identity.name} ({identity.email}) <br />
            <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
        </div>
    );
};

export default Profile;