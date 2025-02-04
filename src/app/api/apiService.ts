const BASE_URL = 'https://challenge.outsera.tech/api/movies?';

export async function fetchData<T>(params: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${params}`);
    if (!response.ok) {
        throw new Error('Erro ao buscar dados');
    }
    return response.json() as Promise<T>;
}