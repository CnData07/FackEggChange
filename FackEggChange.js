//LiteLoaderScript Dev Helper
/// <reference path="G:/Minecraft/LXL/JS_Edit/HelperLib-master/src/index.d.ts"/> 

const _VER = '1.0.1';

mc.listen('onUseItemOn', (pl,item,block)=>{
        if (pl.gameMode != 1 && item.type == "minecraft:spawn_egg" && block.type == "minecraft:mob_spawner"){
            return false;
        }
    }
)

colorLog("yellow", "[禁止刷怪蛋改变刷怪笼] 加载完成!");