export default function BoardPreview({avatar, name, title, description}) {
    return (
        <div className="card w-72 bg-base-100 shadow-xl ">
            <div className="card-body">
                <label class="avatar">
                    <div class="w-10 rounded-full">
                        <img src="src/assets/profile_image.jpg" />
                    </div>
                    <p className="grow-0 mt-1 ml-3"> Fermin Alvarez</p>
                </label>
                <h2 className="card-title">Configuration 1</h2>
                <p>Trying to create new things!</p>
            </div>
        </div>
    )
}