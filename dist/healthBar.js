"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HealthBar = (function (_super) {
    __extends(HealthBar, _super);
    function HealthBar(game, spriteToAttach, width, height, _xOffset, _yOffset, bgColor, fgColor) {
        if (_xOffset === void 0) { _xOffset = 0; }
        if (_yOffset === void 0) { _yOffset = 0; }
        if (bgColor === void 0) { bgColor = "#DD1111"; }
        if (fgColor === void 0) { fgColor = "#11DD11"; }
        _super.call(this, game, spriteToAttach.body.position.x + _xOffset, spriteToAttach.body.position.y + _yOffset);
        this.spriteToAttach = spriteToAttach;
        this.width = width;
        this.height = height;
        this._xOffset = _xOffset;
        this._yOffset = _yOffset;
        this.bgColor = bgColor;
        this.fgColor = fgColor;
        //Draw bar background
        this.bmdBg = game.add.bitmapData(width, height);
        this.bmdBg.ctx.fillStyle = this.bgColor;
        this.bmdBg.ctx.fillRect(0, 0, width, height);
        this.bgSprite = game.add.sprite(this.x, this.y, this.bmdBg);
        this.bgSprite.anchor.set(0.5);
        //Draw bar foreground
        this.bmdFg = game.add.bitmapData(width, height);
        this.bmdFg.ctx.fillStyle = this.fgColor;
        this.bmdFg.ctx.fillRect(0, 0, width, height);
        this.fgSprite = game.add.sprite(this.x, this.y, this.bmdFg);
        this.fgSprite.anchor.set(0.5);
        this.game.world.add(this); // triggers the update function
    }
    HealthBar.prototype.update = function () {
        //Redraw health
        this.bmdFg.clear();
        this.bmdFg.ctx.fillRect(0, 0, (this.width / 100) * this.spriteToAttach.health, this.height);
        //Health bar follow sprite
        this.bgSprite.position.x = this.spriteToAttach.position.x + this.xOffset;
        this.bgSprite.position.y = this.spriteToAttach.position.y + this.yOffset;
        this.fgSprite.position.x = this.spriteToAttach.position.x + this.xOffset;
        this.fgSprite.position.y = this.spriteToAttach.position.y + this.yOffset;
        //Delete on destroy
        if (this.spriteToAttach.health = 0) {
            this.bmdFg.destroy();
            this.bmdBg.destroy();
            this.bgSprite.destroy();
            this.fgSprite.destroy();
            this.destroy();
        }
    };
    Object.defineProperty(HealthBar.prototype, "xOffset", {
        get: function () {
            return this._xOffset;
        },
        set: function (xOff) {
            this._xOffset = xOff;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthBar.prototype, "yOffset", {
        get: function () {
            return this._yOffset;
        },
        set: function (yOff) {
            this._yOffset = yOff;
        },
        enumerable: true,
        configurable: true
    });
    return HealthBar;
}(Phaser.Sprite));
exports.HealthBar = HealthBar;
