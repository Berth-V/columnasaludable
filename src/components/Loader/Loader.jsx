import './Loader.css';

function Loader({ isLoading }) {
    return (
        <div className={`loader ${!isLoading ? 'loader--exit' : ''}`}>
            <div className="loader__content">
                <div className="loader__circle" />

                <h1 className="loader__text">
                    <span>C</span><span>o</span><span>l</span><span>u</span><span>m</span><span>n</span><span>a</span>{' '}
                    <span>S</span><span>a</span><span>l</span><span>u</span><span>d</span><span>a</span><span>b</span><span>l</span><span>e</span>
                </h1>
            </div>
        </div>
    );
}

export default Loader;
