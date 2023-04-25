export default function BoardPreview({ avatar, name, title, description, gif }) {
    return (
        <div className="card w-72 max-h-72 bg-base-100 shadow-xl image-full overflow-hidden ">
            <img src={gif} alt="avatar preview" />
            <div className="card-body">
                <label className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={avatar} />
                    </div>
                    <p className="grow-0 mt-1 ml-3">{name}</p>
                </label>
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}