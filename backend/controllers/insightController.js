const getTreeData = require("../insights/tree");
const getTransitData = require("../insights/transit");

exports.handle_get_insight = async (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const type = req.query.type;
    const radius = req.query.radius; // deprecated
    const width = req.query.width;
    const length = req.query.length;

    const squareFootage = req.query.squareFootage;
    const occupancy = req.query.occupancy;
    const height = req.query.height;
    
    
    try {
        let trees = await getTreeData(lat, lng, radius);
        let transit = await getTransitData(lat, lng);
        debugger;
        console.log(transit)
        res.status(200);
        res.json({
            rating: "A",
            jobs: -300,
            trees: parseInt(trees.toString()),
            carbon: 500,
            transit: transit
        });
    } catch(err) {
        res.status(500);
        res.json({
            error: err
        })
    }
}