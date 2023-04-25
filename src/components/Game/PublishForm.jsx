
import { useState } from 'react';
import { saveGrid } from '../../services/BoardService';
import { useNavigate } from 'react-router';
export default function PublishForm({ initGrid }) {
    let [title, setTitle] = useState()
    let [description, setDescription] = useState()
    const navigate = useNavigate()
    return (
        <form onSubmit={() => {
            saveGrid(initGrid, title, description);
            navigate("/explore");
        }}>
            <div className='flex flex-col'>
                <input type="text" minlength="5" placeholder="Title" className="input input-bordered w-full max-w-xs m-5" required onChange={e => setTitle(e.target.value)} />

                <textarea minlength="5" placeholder="Description" className="textarea textarea-bordered w-full max-w-xs m-5" required onChange={e => setDescription(e.target.value)} />
                <input type="submit" class="btn btn-secondary mb-5" value="PUBLISH" />
            </div>
        </form>

    )
}