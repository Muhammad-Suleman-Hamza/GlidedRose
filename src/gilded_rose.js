const ITEMS_CONSTANTS  = {
  AGED_BRIE :"Aged Brie",
  BACKSTAGE :"Backstage passes to a TAFKAL80ETC concert",
  SULFURAS :"Sulfuras, Hand of Ragnaros",
  CONJURED :"Conjured Mana Cake",
};

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    const items = [...this.items];
    const { AGED_BRIE, BACKSTAGE, SULFURAS, CONJURED } = ITEMS_CONSTANTS;

    items.forEach((item) => {
      if(!(item.name === SULFURAS)){
        item.sellIn = item.sellIn - 1;

        if(item.name === CONJURED){
          item.quality = item.quality - 2;
        } 
        else if(item.name === BACKSTAGE){
          if(item.sellIn <= 0){
            item.quality = 0;
          } 
          else if(item.sellIn > 0 && item.sellIn <= 5){
            item.quality = item.quality + 3;
          }
          else if(item.sellIn > 5 && item.sellIn <= 10){
            item.quality = item.quality + 2;
          } 
          else {
            item.quality = item.quality + 1;
          }
        }
        else if(item.name === AGED_BRIE){
          if(item.sellIn < 0){
            item.quality = item.quality + 2;
          }
          else{
            item.quality = item.quality + 1;
          }
        }
        else{
          if(item.sellIn < 0){
            item.quality = item.quality - 2;
          }
          else{
            item.quality = item.quality - 1;
          }
        }

        if(item.quality < 0){
          item.quality = 0;
        }
        if(item.quality > 50){
          item.quality = 50;
        }
      }
    });
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
