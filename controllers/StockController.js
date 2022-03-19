const { pool } = require("../configs/db");
require('dotenv').config();

module.exports.getAllStocks = async function(req,res)
{
    let stocks=[];
    let client = null ;
    try
    {
        client = await pool.connect()
        const result = await client.query('SELECT * FROM hodlinfo')
        stocks=result.rows;
    } 
    finally
    {
        client.release()
    }
    return res.json({
        status: 200,
        stocks: stocks,
    });
}

module.exports.postStocks= async (req,res)=>
{
    var name=req.name;
    var last=req.last;
    var volume=req.volume;
    var base_unit=req.base_unit;
    var buy_sell=req.buy_sell;
    console.log(volume+ "***");

    const stocks_query_data = await pool.query(
        `INSERT INTO hodlinfo (name,last,volume,base_unit,buy_sell) VALUES ('${name}', '${last}', '${volume}', '${base_unit}', '${buy_sell}') RETURNING *;`
    );

    return res.status(200).json({
        message:`Stocks details stored for ${name} stock`,
    });

}

