import Link from 'next/link';
import { APP } from '../utils/init-firebase';

export function Header({ links }) {
    const onClickLogout = () => {
        APP.auth().signOut().then(() => {
            location.reload()
        });
    }

    return <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none">
            <Link href="/">
                <a className="btn btn-square btn-ghost">
                    <svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
                    </svg>
                </a>
            </Link>
        </div>
        <div className="flex-1 px-2 mx-2 gap-x-2 text-lg">
            {links && links.map((link, i) => {
                const isLast = i === links.length - 1;
                if (isLast) {
                    return <span key={i} className="font-normal" >{link.label}</span>
                }
                return <div key={i} className="flex gap-x-2">
                    <span className="font-bold"><Link href={link.href}><a className="text-blue-400">{link.label}</a></Link></span>
                    <span className="font-bold">{'>'}</span>
                </div>
            })}
        </div>
        <div className="flex-none">
            <button onClick={onClickLogout} className="btn btn-square btn-ghost">
                <svg id="i-signout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" />
                </svg>
            </button>
        </div>
    </div>
}
