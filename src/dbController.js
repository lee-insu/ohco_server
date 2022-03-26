import fs from "fs";
import { resolve } from "path";

const basePath = resolve();

const filenames = {
  cody: resolve(basePath, "src/db/cody.json"),
  products: resolve(basePath, "src/db/products.json"),
  perfumes: resolve(basePath, "src/db/perfumes.json"),
  music: resolve(basePath, "src/db/music.json"),
};

export const readDB = (target) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], "utf-8"));
  } catch (err) {
    console.error(err);
  }
};
export const reverseDB = (target) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], "utf-8")).reverse();
  } catch (err) {
    console.error(err);
  }
};

export const randomDB = (target) => {
  try {
    const items = JSON.parse(fs.readFileSync(filenames[target], "utf-8"));
    function shuffle(array) {
      for (let index = array.length - 1; index > 0; index--) {
        const randomPosition = Math.floor(Math.random() * (index + 1));
        const temporary = array[index];
        array[index] = array[randomPosition];
        array[randomPosition] = temporary;
      }
      return array;
    }
    return shuffle(items);
  } catch (err) {
    console.error(err);
  }
};
