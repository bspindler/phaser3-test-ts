export class MarioTiles extends Phaser.Scene {
  private map: Phaser.Tilemaps.Tilemap;
  private backgroundLayer: Phaser.Tilemaps.StaticTilemapLayer;

  constructor() {
    super({
      key: "MarioTiles"
    });
  }

  preload(): void {
    this.load.image('mario-tiles', './assets/games/test/super-mario-tiles.png');
    
  }

  create(): void {
    // Load a map from a 2D array of tile indices
    const level = [
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   1,   2,   3,   0,   0,   0,   1,   2,   3,   0 ],
      [  0,   5,   6,   7,   0,   0,   0,   5,   6,   7,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,  14,  13,  14,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
      [  0,   0,  14,  14,  14,  14,  14,   0,   0,   0,  15 ],
      [  0,   0,   0,   0,   0,   0,   0,   0,   0,  15,  15 ],
      [ 35,  36,  37,   0,   0,   0,   0,   0,  15,  15,  15 ],
      [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  39,  39 ]
    ];

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    const tiles = map.addTilesetImage("mario-tiles");
    const layer = map.createStaticLayer(0, tiles, 0, 0);
  }

  update(): void {
    
  }
}
