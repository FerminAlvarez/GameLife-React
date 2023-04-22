import { supabase } from "../supabase/supabase.config"
export async function saveGrid(grid, title, description) {
    await supabase
        .from('Boards')
        .insert([
            {
                grid: grid,
                title: title,
                description: description
            },
        ])
}

export async function getAllGridsInfo() {
    return await supabase
        .from('Boards')
        .select(`id,
        title, 
        description,
        profiles(
            id,
            full_name,
            avatar_url
        )`)
        .order('id', { ascending: false })
        .range(0, 50);
}

export async function getLastGridsInfo() {
    return await supabase
        .from('Boards')
        .select(`id,
        title, 
        description,
        profiles(
            id,
            full_name,
            avatar_url
        )`)
        .order('id', { ascending: false })
        .range(0, 3);
}
export async function getBoard(id) {
    return await supabase
        .from('Boards')
        .select(`id,
        title, 
        description,
        grid,
        created_at,
        profiles(
            id,
            full_name,
            avatar_url
        )`)
        .eq('id', id)
}