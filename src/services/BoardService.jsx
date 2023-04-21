import { supabase } from "../supabase/supabase.config"
export async function saveGrid(grid, title, description) {
    await supabase
        .from('Boards')
        .insert([
            {
                grid: grid,
                title: "Config 1",
                description: "Description 1"
            },
        ])
}

export async function getAllGrids() {
    return await supabase
        .from('Boards')
        .select('*')

}