// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`10001000020707070707070707070707070707030a060b111211110c110b1111121111080a080c0a080d11121111110e110b11080a060709080d1311110b1111111211080a06080e0a101106121111060c0611080a0606071111060606111306130c06080a0b06120b060b060612060e06060f080a0609111106060606060b06060b06080a080e0a11111106120d0f0f0f060f080a060711111011121111060e060e06080a1111111111110d10110b06130606080a060906110c12060b0d0106130b06080a080e0a111206130d06120c060601080a0607060613060b06060606010b06080a06060b0606130601130b060606010804090909090909090909090909090905`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundCenter,sprites.builtin.coral2,sprites.builtin.oceanDepths0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
