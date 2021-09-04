import React from 'react';
import { APP } from '../utils/init-firebase';
import { TextField, PasswordField } from './fields';
import { LoadingScreen } from './loading-screen';

export function LoginForm() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [loading, setLoading] = React.useState();

    const valid = email && password;

    const onSubmit = async () => {
        if (!valid) {
            return;
        }
        try {
            setLoading(true);
            await APP.auth().signInWithEmailAndPassword(email, password)
            location.reload();
        } catch (error) {
            console.error(error);
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (<>
        {loading && <div className="absolute inset-0 bg-opacity-30"><LoadingScreen label="Logging in" /></div>}
        <label htmlFor="my-modal-2" className="btn btn-primary modal-button">Login Form</label>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <TextField label="Email" onChange={setEmail} />
                <PasswordField label="Password" onChange={setPassword} />
                <div className="modal-action">
                    {valid ?
                        <label htmlFor="my-modal-2" onClick={onSubmit} className={"btn btn-primary"}>Login</label>
                        : <button className="btn btn-primary" disabled="disabled">Login</button>
                    }
                    <label htmlFor="my-modal-2" className="btn">Cancel</label>
                </div>
            </div>
        </div>
    </>);
}
