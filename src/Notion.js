import axios from "axios";
const databaseId = "960440407dbb4f7faa27fe3d2a2c425d";
const notionApikey = "secret_AwIZDISSRw2cdKLxG40eUcZgGePfJJeGWTx3j5qzzos";
async function getItems() {
  try {
    let response;
    let config = {
      headers: {
        Authorization: `Bearer ${notionApikey}`,
        "Notion-Version": "2022-02-22",
        "Access-Control-Allow-Origin": "*"
      },
    };
    let data = {};
    await axios
      .post(
        "https://api.notion.com/v1/databases/" + databaseId ,
        data,
        config
      )
      .then((resp) => {
        response = resp.data;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });

    let expenses = [];
    let incomes = [];
    for (let i in response.results) {
      let item = {
        name: null,
        type: null,
        category: null,
        amount: null,
        date: null,
      };

      item.category = response.results[i].properties.Category.select.name;
      item.date = response.results[i].properties.Date.date.start;
      item.amount = response.results[i].properties.Amount.number;
      item.type = response.results[i].properties.Type.select.name;
      item.name = response.results[i].properties.Name.title[0].plain_text;

      if (item.type == "Expense") expenses.push(item);
      else incomes.push(item);
    }
    return { expenses, incomes };
  } catch (error) {
    console.error(error.body);
    return error;
  }
}
console.log(await getItems());

export default getItems;
