import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>


                    <a className="navbar-brand" href="/">Next JS - Wordpress</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-4 ml-4 active">
                                <a className="btn">

                                    <Link className="btn" href={`/postdata`}>
                                        <div className="mr-4">
                                            Post -
                                        </div>
                                    </Link>
                                </a>
                            </li>
                            <a href="" className="btn">
                                <li className="nav-item active">
                                    <Link href={`/eventdata`}>
                                        <div>
                                            Event
                                        </div>

                                    </Link>
                                </li>
                            </a>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

