export function POST (req) {

    const { name, age, topic } = awaitreq.json();
    console.log(name,age,topic);

    return Response.json({ status: "ok" });

}