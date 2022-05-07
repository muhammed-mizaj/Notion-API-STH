import { Client } from "@notionhq/client";

const notion = new Client({
  auth: "secret_AwIZDISSRw2cdKLxG40eUcZgGePfJJeGWTx3j5qzzos",
});

const databaseId = "960440407dbb4f7faa27fe3d2a2c425d";

async function getItems() {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
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
  }
}

async function getPage(id) {
  const pageId = id;
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}

export default getItems;
