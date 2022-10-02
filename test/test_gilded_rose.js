var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  // FOR SULFURAS
  it("should not sell or decrease quantity of Sulfuras, Hand of Ragnaros", function(){
    const gildedRoseArr = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(item.sellIn).to.equal(-1);
    expect(item.quality).to.equal(80);
    
  });

  // FOR CONJURED
  it("should decrease the quality of Conjured Mana Cake by 2", function(){
    const gildedRoseArr = new Shop([
      new Item("Conjured Mana Cake", 0, 2),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Conjured Mana Cake");
    expect(item.sellIn).to.equal(-1);
    expect(item.quality).to.equal(0);
  });

  // FOR BACKSTAGE

  it("should equal the quality of Backstage by 0, if sellIn less than equal to 0", function(){
    const gildedRoseArr = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 1),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.sellIn).to.equal(-1);
    expect(item.quality).to.equal(0);
  });

  it("should increase the quality of Backstage by 3, sellIn greater than 0 AND sellIn less than equal to 5", function(){
    const gildedRoseArr = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 3),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.sellIn).to.equal(4);
    expect(item.quality).to.equal(6);
  });

  it("should increase the quality of Backstage by 2, if sellIn greater than 5 && sellIn less than equal to 10", function(){
    const gildedRoseArr = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 9),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.sellIn).to.equal(6);
    expect(item.quality).to.equal(11);
  });

  it("should increase the quality of Backstage by 1, if sellIn greater than 10", function(){
    const gildedRoseArr = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 11),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.sellIn).to.equal(11);
    expect(item.quality).to.equal(12);

  });

  // FOR AGED_BRIE

  it("should increase the quality of Aged Brie, if less than 0 by 2", function(){
    const gildedRoseArr = new Shop([ 
      new Item("Aged Brie", -1, 2) 
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Aged Brie");
    expect(item.sellIn).to.equal(-2);
    expect(item.quality).to.equal(4);
  });

  it("should increase the quality of Aged Brie, if less than 0 by 1", function(){
    const gildedRoseArr = new Shop([
      new Item("Aged Brie", 1, 2),
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Aged Brie");
    expect(item.sellIn).to.equal(0);
    expect(item.quality).to.equal(3);

  });

  // FOR SIMPLE

  it("should decrease the quality of Simple Item, if less than 0 by -2", function(){
    const gildedRoseArr = new Shop([ 
      new Item("Simple Item", -1, 2) 
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Simple Item");
    expect(item.sellIn).to.equal(-2);
    expect(item.quality).to.equal(0);
  });

  it("should decrease quantity of Simple Item, if greater than and equal to 0 by -1", function(){
    const gildedRoseArr = new Shop([
      new Item("Simple Item", 10, 20)
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Simple Item");
    expect(item.sellIn).to.equal(9);
    expect(item.quality).to.equal(19);
  
  });

  // FOR QUALITY < 0

  it("should equal to 0 the quality of Simple Item, if quality less than 0", function(){
    const gildedRoseArr = new Shop([ 
      new Item("Simple Item", 1, -10) 
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Simple Item");
    expect(item.sellIn).to.equal(0);
    expect(item.quality).to.equal(0);
  });

  // FOR QUALITY > 50

  it("should equal to 50 the quality of Simple Item, if quality greater than 50", function(){
    const gildedRoseArr = new Shop([ 
      new Item("Simple Item", 1, 60) 
    ]);

    const [item] = gildedRoseArr.updateQuality();

    expect(item.name).to.equal("Simple Item");
    expect(item.sellIn).to.equal(0);
    expect(item.quality).to.equal(50);
  });

  // FOR ITEMS COUNT
  it("should return same number of items", function(){
    const gildedRoseArr = new Shop([ 
      new Item("Simple Item 1", 10, 10), 
      new Item("Simple Item 2", 10, 10),
      new Item("Simple Item 3", 10, 10),
      new Item("Simple Item 4", 10, 10),
      new Item("Simple Item 5", 10, 10),
    ]);

    const items = gildedRoseArr.updateQuality();
    expect(items.length).to.eq(5);

  });

});
