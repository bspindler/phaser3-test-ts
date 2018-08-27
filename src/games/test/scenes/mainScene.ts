export class MainScene extends Phaser.Scene {
  private map: Phaser.Tilemaps.Tilemap;
  private backgroundLayer: Phaser.Tilemaps.StaticTilemapLayer;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("tiles", "./assets/games/test/spritesheet_tiles.png")
    this.load.tilemapTiledJSON("level1", "./assets/games/test/level1.json" );
    
  }

  create(): void {

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const map = this.make.tilemap({ key: "level1"});
    const tiles = map.addTilesetImage("spritesheet_tiles", "tiles");
    const layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
  }

  update(): void {
    
  }
}
