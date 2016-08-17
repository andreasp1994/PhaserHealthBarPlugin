export class HealthBar extends Phaser.Sprite {

    private bgSprite : Phaser.Sprite;
    private fgSprite : Phaser.Sprite;
    private bmdBg : Phaser.BitmapData;
    private bmdFg : Phaser.BitmapData;

    constructor( game : Phaser.Game, private spriteToAttach : Phaser.Sprite,  public width : number, public height : number,
                 private _xOffset : number = 0, private _yOffset : number = 0, private bgColor : string = "#DD1111", private fgColor : string = "#11DD11"){
        super(game, spriteToAttach.body.position.x + _xOffset, spriteToAttach.body.position.y + _yOffset);
        //Draw bar background
        this.bmdBg=game.add.bitmapData(width, height);
        this.bmdBg.ctx.fillStyle = this.bgColor;
        this.bmdBg.ctx.fillRect(0,0,width, height);
        this.bgSprite = game.add.sprite(this.x, this.y, this.bmdBg);
        this.bgSprite.anchor.set(0.5);
        
        //Draw bar foreground
        this.bmdFg=game.add.bitmapData(width, height);
        this.bmdFg.ctx.fillStyle = this.fgColor;
        this.bmdFg.ctx.fillRect(0,0,width, height);
        this.fgSprite = game.add.sprite(this.x, this.y, this.bmdFg);
        this.fgSprite.anchor.set(0.5);

        this.game.world.add(this); // triggers the update function
    }

    update() {
        //Redraw health
        this.bmdFg.clear();
        this.bmdFg.ctx.fillRect(0,0,(this.width/100)*this.spriteToAttach.health, this.height);
        
        //Health bar follow sprite
        this.bgSprite.position.x = this.spriteToAttach.position.x+this.xOffset;
        this.bgSprite.position.y = this.spriteToAttach.position.y+this.yOffset;
        this.fgSprite.position.x = this.spriteToAttach.position.x + this.xOffset;
        this.fgSprite.position.y = this.spriteToAttach.position.y+this.yOffset;
    }

    set xOffset(xOff : number){
        this._xOffset = xOff;
    }

    get xOffset() : number {
        return this._xOffset;
    }

    set yOffset(yOff : number){
        this._yOffset = yOff;
    }

    get yOffset() : number {
        return this._yOffset;
    }
}