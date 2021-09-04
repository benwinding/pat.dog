import React from 'react';
import { GetLoggedInUser } from '../utils/init-firebase';
import { LoadingScreen } from './loading-screen';
import { LoginForm } from "./login-form";

export function LoginWrapper(props) {
    const [status, setStatus] = React.useState('loading');

    React.useEffect(() => {
        GetLoggedInUser()
            .then((u) => setStatus(!!u ? 'logged-in' : 'not logged in!'))
            .catch(err => setStatus(err.toString()) && console.error(err))
    }, []);

    if (status === 'loading') {
        return <LoadingScreen label="Checking login information" />
    }

    if (status === 'logged-in') {
        return <>
            {props.children}
        </>
    }

    return <ErrorScreen status={status} >
        <LoginForm />
    </ErrorScreen>
}

function ErrorScreen({status, children}) {
    return <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Error: {status}</h1>
                <div>{children}</div>
            </div>
        </div>
    </div>
}