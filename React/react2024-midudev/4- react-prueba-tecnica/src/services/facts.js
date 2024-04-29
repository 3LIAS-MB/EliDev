const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

// no puedas usar react query, SWR, axios, apolo
// export const getRandomFact = () => {
//     return fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then((res) => res.json())
//     .then((data) => {
//         const { fact } = data;
//         return fact;
//     });
// }

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
}

// -> MAL PORQUE NO ES REUTILIZABLE
// export const getRandomFact = (setFact) => {
//     fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then((res) => res.json())
//     .then((data) => {
//         const { fact } = data;
//         setFact(fact);
//     });
// }
  