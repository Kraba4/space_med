var timerDrag, draggNow, offX,offY, cursorPosX,cursorPosY,
    mobs = [], base = [], equipment = [], dataMobs = [],
    frames1 = ["bt.jpg"], frames2 = ["floor.jpg"], framesCapsule = ["capsule.png"], floor = ["p.jpg"],
    timerMain = null, screen,
    timerScroll,
    wallSize = 50;
var infoTag, infoTag2;
var l = [1, -2, "12a"];
	for (var i=0; i < l.length; i++){
		console.log(Math.abs(l[i]));
	}

var textData = {
    "planet": {
        "gresio": "Серая планета, где живут котики. И еще там всякие ученые",
        "colony1": "Колония военных челов, тут они обустраивают себе дом",
        "colony2": "Колония военных челов, тут у них заводы",
        "yoka": "Холодная планета с вечным -50градусов, планета идеально подходит для пингвинов",
        "city": "Настолько большая космическая станция, что ее считают планетой"
    }
}//Попытался подключить через ajax на 766 строке, не получилось
var data = {
    planet: {
        gresio: {
            race: {
                war: 0, cat: 15, frog: 45, penguin: 0, fly: 10, sponge: 30, eye: 0
            },
            ill: {
                circle2dvirus: 15, rectanglevirus: 0, boxvirus: 20, circle3dvirus: 15,
                redbacteria: 10, greenbacteria: 10, bluebacteria: 20, yellowbacteria: 0,
                turtleparasite: 0, snakeparasite: 0, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 0, deathcurse: 0, tiredcurse: 5, madnesscurse: 5
            }
        },
        colony1: {
            race: {
                war: 0, cat: 2, frog: 15, penguin: 5, fly: 3, sponge: 10, eye: 15
            },
            ill: {
                circle2dvirus: 10, rectanglevirus: 10, boxvirus: 20, circle3dvirus: 5,
                redbacteria: 5, greenbacteria: 5, bluebacteria: 0, yellowbacteria: 5,
                turtleparasite: 0, snakeparasite: 10, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 5, deathcurse: 5, tiredcurse: 15, madnesscurse: 5
            }
        },
        colony2: {
            race: {
                war: 0, cat: 0, frog: 0, penguin: 0, fly: 45, sponge: 5, eye: 35
            },
            ill: {
                circle2dvirus: 20, rectanglevirus: 0, boxvirus: 10, circle3dvirus: 10,
                redbacteria: 10, greenbacteria: 0, bluebacteria: 0, yellowbacteria: 40,
                turtleparasite: 5, snakeparasite: 5, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 0, deathcurse: 0, tiredcurse: 0, madnesscurse: 0
            }
        },
        yoka: {
            race: {
                war: 0, cat: 0, frog: 10, penguin: 50, fly: 10, sponge: 0, eye: 0
            },
            ill: {
                circle2dvirus: 5, rectanglevirus: 5, boxvirus: 10, circle3dvirus: 5,
                redbacteria: 0, greenbacteria: 15, bluebacteria: 10, yellowbacteria: 0,
                turtleparasite: 0, snakeparasite: 0, hamsterparasite: 30, fishparasite: 5,
                unluckcurse: 0, deathcurse: 5, tiredcurse: 5, madnesscurse: 5
            }
        },
        city: {
            race: {
                war: 0, cat: 10, frog: 20, penguin: 5, fly: 15, sponge: 35, eye: 5
            },
            ill: {
                circle2dvirus: 10, rectanglevirus: 10, boxvirus: 10, circle3dvirus: 10,
                redbacteria: 15, greenbacteria: 3, bluebacteria: 5, yellowbacteria: 2,
                turtleparasite: 0, snakeparasite: 5, hamsterparasite: 5, fishparasite: 5,
                unluckcurse: 15, deathcurse: 2, tiredcurse: 2, madnesscurse: 1
            }
        }
    },
    race: {
        war: {
            work: {
                office: 30, security: 10, military: 40, art: 5, scientist: 10, factory: 0, farm: 5,hunt: 0,  bum: 0
            },
            ill: {
                circle2dvirus: 0, rectanglevirus: 20, boxvirus: 20, circle3dvirus: 0,
                redbacteria: 10, greenbacteria: 5, bluebacteria: 0, yellowbacteria: 15,
                turtleparasite: 5, snakeparasite: 5, hamsterparasite: 5, fishparasite: 0,
                unluckcurse: 10, deathcurse: 5, tiredcurse: 5, madnesscurse: 5
            }
        },
        cat: {
            work: {
                office: 0, security: 10, military: 0, art: 0, scientist: 0, factory: 0, farm: 0, hunt: 90,  bum: 0
            },
            ill: {
                circle2dvirus: 5, rectanglevirus: 5, boxvirus: 0, circle3dvirus: 0,
                redbacteria: 5, greenbacteria: 0, bluebacteria: 5, yellowbacteria: 5,
                turtleparasite: 20, snakeparasite: 20, hamsterparasite: 15, fishparasite: 20,
                unluckcurse: 0, deathcurse: 0, tiredcurse: 0, madnesscurse: 0
            }
        },
        frog: {
            work: {
                office: 0, security: 0, military: 0, art: 20, scientist: 70, factory: 0, farm: 0, hunt: 0,  bum: 10
            },
            ill: {
                circle2dvirus: 0, rectanglevirus: 0, boxvirus: 30, circle3dvirus: 20,
                redbacteria: 0, greenbacteria: 0, bluebacteria: 0, yellowbacteria: 0,
                turtleparasite: 0, snakeparasite: 0, hamsterparasite: 0, fishparasite: 10,
                unluckcurse: 5, deathcurse: 0, tiredcurse: 20, madnesscurse: 15
            }
        },
        penguin: {
            work: {
                office: 10, security: 10, military: 30, art: 0, scientist: 0, factory: 0, farm: 50, hunt: 0,  bum: 0
            },
            ill: {
                circle2dvirus: 0, rectanglevirus: 0, boxvirus: 10, circle3dvirus: 0,
                redbacteria: 0, greenbacteria: 10, bluebacteria: 10, yellowbacteria: 10,
                turtleparasite: 0, snakeparasite: 10, hamsterparasite: 10, fishparasite: 10,
                unluckcurse: 5, deathcurse: 20, tiredcurse: 5, madnesscurse: 0
            }
        },
        fly: {
            work: {
                office: 0, security: 0, military: 0, art: 0, scientist: 0, factory: 0, farm: 0, hunt: 0,  bum: 100
            },
            ill: {
                circle2dvirus: 20, rectanglevirus: 0, boxvirus: 0, circle3dvirus: 20,
                redbacteria: 0, greenbacteria: 0, bluebacteria: 10, yellowbacteria: 40,
                turtleparasite: 0, snakeparasite: 0, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 0, deathcurse: 10, tiredcurse: 0, madnesscurse: 0
            }
        },
        sponge: {
            work: {
                office: 10, security: 40, military: 0, art: 20, scientist: 20, factory: 10, farm: 0, hunt: 0,  bum: 0
            },
            ill: {
                circle2dvirus: 20, rectanglevirus: 0, boxvirus: 10, circle3dvirus: 0,
                redbacteria: 10, greenbacteria: 10, bluebacteria: 10, yellowbacteria: 10,
                turtleparasite: 0, snakeparasite: 0, hamsterparasite: 5, fishparasite: 0,
                unluckcurse: 20, deathcurse: 0, tiredcurse: 0, madnesscurse: 5
            }
        },
        eye: {
            work: {
                office: 0, security: 0, military: 0, art: 0, scientist: 0, factory: 70, farm: 0, hunt: 0,  bum: 30
            },
            ill: {
                circle2dvirus: 20, rectanglevirus: 0, boxvirus: 0, circle3dvirus: 30,
                redbacteria: 10, greenbacteria: 10, bluebacteria: 10, yellowbacteria: 20,
                turtleparasite: 0, snakeparasite: 0, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 0, deathcurse: 0, tiredcurse: 0, madnesscurse: 0
            }
        }
    },
    work: {
        office: {
            ill: {
                circle2dvirus: 10, rectanglevirus: 10, boxvirus: 10, circle3dvirus: 10,
                redbacteria: 5, greenbacteria: 3, bluebacteria: 0, yellowbacteria: 2,
                turtleparasite: 10, snakeparasite: 0, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 10, deathcurse: 5, tiredcurse: 20, madnesscurse: 5
            }
        },
        security: {
            ill: {
                circle2dvirus: 10, rectanglevirus: 10, boxvirus: 10, circle3dvirus: 10,
                redbacteria: 5, greenbacteria: 15, bluebacteria: 3, yellowbacteria: 2,
                turtleparasite: 0, snakeparasite: 5, hamsterparasite: 5, fishparasite: 0,
                unluckcurse: 5, deathcurse: 5, tiredcurse: 5, madnesscurse: 10
            }
        },
        military: {
            ill: {
                virus: 30, parasite: 20, curse: 15, bacteria: 35
            },
            ill: {
                circle2dvirus: 5, rectanglevirus: 5, boxvirus: 5, circle3dvirus: 5,
                redbacteria: 10, greenbacteria: 25, bluebacteria: 3, yellowbacteria: 2,
                turtleparasite: 0, snakeparasite: 5, hamsterparasite: 5, fishparasite: 0,
                unluckcurse: 0, deathcurse: 25, tiredcurse: 0, madnesscurse: 5
            }
        },
        art: {
            ill: {
                circle2dvirus: 2, rectanglevirus: 1, boxvirus: 1, circle3dvirus: 1,
                redbacteria: 10, greenbacteria: 5, bluebacteria: 15, yellowbacteria: 5,
                turtleparasite: 15, snakeparasite: 3, hamsterparasite: 2, fishparasite: 0,
                unluckcurse: 10, deathcurse: 0, tiredcurse: 30, madnesscurse: 0
            }
        },
        scientist: {
            ill: {
                circle2dvirus: 5, rectanglevirus: 5, boxvirus: 5, circle3dvirus: 5,
                redbacteria: 5, greenbacteria: 5, bluebacteria: 5, yellowbacteria: 5,
                turtleparasite: 5, snakeparasite: 5, hamsterparasite: 5, fishparasite: 5,
                unluckcurse: 5, deathcurse: 5, tiredcurse: 5, madnesscurse: 25
            }
        },
        factory: {
            ill: {
                circle2dvirus: 10, rectanglevirus: 10, boxvirus: 10, circle3dvirus: 10,
                redbacteria: 10, greenbacteria: 5, bluebacteria: 10, yellowbacteria: 10,
                turtleparasite: 0, snakeparasite: 5, hamsterparasite: 0, fishparasite: 0,
                unluckcurse: 0, deathcurse: 0, tiredcurse: 20, madnesscurse: 0
            }
        },
        farm: {
            ill: {
                circle2dvirus: 1, rectanglevirus: 2, boxvirus: 1, circle3dvirus: 1,
                redbacteria: 10, greenbacteria: 5, bluebacteria: 5, yellowbacteria: 0,
                turtleparasite: 5, snakeparasite: 10, hamsterparasite: 30, fishparasite: 10,
                unluckcurse: 0, deathcurse: 0, tiredcurse: 20, madnesscurse: 0
            }
        },
        hunt: {
            ill: {
                circle2dvirus: 1, rectanglevirus: 2, boxvirus: 1, circle3dvirus: 1,
                redbacteria: 0, greenbacteria: 5, bluebacteria: 5, yellowbacteria: 0,
                turtleparasite: 0, snakeparasite: 35, hamsterparasite: 15, fishparasite: 5,
                unluckcurse: 30, deathcurse: 0, tiredcurse: 0, madnesscurse: 0
            }
        },
        bum: {
            ill: {
                circle2dvirus: 5, rectanglevirus: 5, boxvirus: 5, circle3dvirus: 5,
                redbacteria: 10, greenbacteria: 10, bluebacteria: 10, yellowbacteria: 10,
                turtleparasite: 25, snakeparasite: 0, hamsterparasite: 5, fishparasite: 0,
                unluckcurse: 10, deathcurse: 0, tiredcurse: 0, madnesscurse: 0
            }
        }
    },
    ill: {
        circle2dvirus: {
            symptom: {
                cough: 50,
                vertigo: 10,
                tired: 10,
                headache: 20,
                redeye: 5,
                colorface: 5
            }
        },
        circle3dvirus: {
            symptom: {
                cough: 40,
                vertigo: 15,
                headache: 30,
                redeye: 5,
                stomachache: 10
            }
        },
        rectanglevirus: {
            symptom: {
                cough: 35,
                tired: 25,
                headache: 20,
                colorface: 10,
                toothache: 10
            }
        },
        boxvirus: {
            symptom: {
                cough: 35,
                headache: 20,
                colorface: 10,
                stomachache: 10,
                toothache: 10,
                redeye: 15
            }
        },
        redbacteria:{
            symptom: {
                rash: 40,
                colorface: 5,
                stomachache: 15,
                headache: 20,
                bodyaches: 20
            }
        },
        greenbacteria:{
            symptom: {
                vomit: 20,
                stomachache: 50,
                headache: 5,
                bodyaches: 10,
                toothache: 15
            }
        },
        bluebacteria:{
            symptom: {
                rash: 30,
                redeye: 10,
                colorface: 15,
                headache: 5,
                spasm: 25,
                toothache: 15
            }
        },
        yellowbacteria:{
            symptom: {
                cough: 30,
                vertigo: 25,
                headache: 5,
                spasm: 15,
                toothache: 15,
                vomit: 10
            }
        },
        turtleparasite:{
            symptom: {
                spasm: 40,
                earache: 5,
                headache: 15,
                badtaste: 10,
                redeye: 15,
                vertigo: 25
            }
        },
        snakeparasite:{
            symptom: {
                rash: 20,
                stomachache: 20,
                toothache: 20,
                bodyaches: 10,
                tired: 15,
                badsmell: 10,
                poison: 5
            }
        },
        hamsterparasite:{
            symptom: {
                stomachache: 5,
                toothache: 10,
                bodyaches: 20,
                badmind: 20,
                redeye: 15,
                angry: 30
            }
        },
        fishparasite:{
            symptom: {
                rash: 30,
                badsmell: 15,
                earache: 15,
                redeye: 20,
                spasm: 10,
                badmind: 10
            }
        },
        unluckcurse: {
            symptom: {
                unluck: 5,
                badmind: 30,
                bodyaches: 25,
                tired: 20,
                angry: 20
            }
        },
        deathcurse: {
            symptom: {
                cough: 10,
                vertigo: 5,
                tired: 5,
                headache: 5,
                redeye: 5,
                colorface: 5,
                stomachache: 5,
                toothache: 5,
                rash: 5,
                bodyaches: 5,
                vomit: 5,
                spasm: 5,
                earache: 5,
                badtaste: 5,
                badsmell: 5,
                poison: 5,
                badmind: 5,
                angry: 5,
                unluck: 5
            }
        },
        tiredcurse: {
            symptom: {
                tired: 50,
                headache: 15,
                redeye: 15,
                vertigo: 10,
                poison: 10
            }
        },
        madnesscurse: {
            symptom: {
                angry: 30,
                badmind: 40,
                bodyaches: 20,
                redeye: 10
            }
        }
    }
}
var meds = {
    med1: {
        rgbantibiotic: {
            redbacteria: 1, greenbacteria: 1, bluebacteria: 1
        },
        orangeantibiotic:{
            redbacteria: 1, yellowbacteria: 1
        },
        greenantibiotic:{
            greenbacteria: 1, bluebacteria: 1, yellowbacteria: 1
        }
    },
    med2: {
        circlecode : {
            circle2dvirus: 1, circle3dvirus: 1
        },
        planecode: {
            circle2dvirus: 1, rectanglevirus: 1,
        },
        spacecode: {
            boxvirus: 1, circle3dvirus: 1
        }
    },
    med3: {
        reptilieskiller:{
            turtleparasite: 1, snakeparasite: 1
        },
        waterkiller:{
            turtleparasite: 1, fishparasite: 1
        },
        hamsterkiller:{
            hamsterparasite: 1
        }
    },
    med4: {
        luckpray:{
            unluckcurse: 1
        },
        lifepray:{
            deathcurse: 1
        },
        peppray:{
            tiredcurse: 1
        },
        mindpray:{
            madnesscurse: 1
        }
    }
}
var ks = {
        planet: {
            gresio: 1, colony1: 1, colony2: 1, yoka: 1, city: 1
        },
        race: {
            war: 1, cat: 1, frog: 1, penguin: 1, fly: 1, sponge: 1, eye: 1
        },
        work: {
            office: 1, security: 1, military: 1, art: 1, scientist: 1, factory: 1, farm: 1, hunt: 1, bum: 1
        },
        ill: {
            circle2dvirus: 1, rectanglevirus: 1, boxvirus: 1, circle3dvirus: 1,
            redbacteria: 1, greenbacteria: 1, bluebacteria: 1, yellowbacteria: 1,
            turtleparasite: 1, snakeparasite: 1, hamsterparasite: 1, fishparasite: 1,
            unluckcurse: 1, deathcurse: 1, tiredcurse: 1, madnesscurse: 1
        },
        symptom: {
            cough: 1, vertigo: 1, tired: 1, headache: 1, redeye: 1, colorface: 1, stomachache: 1, toothache: 1,
            rash: 1, bodyaches: 1, vomit: 1, spasm: 1, earache: 1, badtaste: 1, badsmell: 1, poison: 1, badmind: 1,
            angry: 1, unluck: 1
        }
}
var count = 0;
function RandomPatient(id) {
    this.planet = lucky(ks["planet"]);
    adjust("planet", this.planet);
    this.race = lucky(ks["race"]);
    adjust("race", this.race);
    this.work = lucky(ks["work"]);
    adjust("work", this.work);
    this.ill = lucky(ks["ill"]);
    adjust("ill", this.ill);
    this.symptoms = [];
    for(key in ks["symptom"])
    {
        if(ks["symptom"][key]== 1)
        {
            ks["symptom"][key]=0;
        }
    }
    for(var i=0;i<parseInt(Math.random()*3+1);i++)
    {
        this.symptoms.push(lucky(ks["symptom"]));
        ks["symptom"][this.symptoms[i]] = 0;
    }

    this.id = id;
    console.log(this);
    clearK();
}
function adjust(type, obj) {
    var arr = data[type][obj];
    for(key in arr)
    {
        for(key2 in arr[key])
        {
            ks[key][key2]*=arr[key][key2];

        }
    }
}
function lucky(obj) {
    var sum = 0;
    for(key in obj)
    {
        sum += obj[key];
    }

    var rand = parseInt(Math.random()*sum+1);
    var randSum = 0;
    var randKey;
    for(key in obj)
    {
        randKey = key;
        randSum += obj[randKey];
        if(randSum>=rand) break;
    }
    return randKey;
}
function clearK() {
    for(key in ks)
    {
        for(key2 in ks[key])
        {
            ks[key][key2] = 1;
        }
    }
}
function Sprite(srcFrames, height, name,index) {
    this.frames = srcFrames;
    this.frameIndex = 0;
    this.image = $("<img>",{
        "id" : name,
        "index": index,
        "alt" : height + "px",
        "src" : srcFrames[0],
        "mind" : 0,
        "hp" : 6000,
        "ill" : 1,
        "hide" : -1,
        "hpStart" : 6000,
        "isSave": 0,
        "css" : {
            "position" : "absolute",
            "display" : "block",
            "height" : height+"px"
        }
    });
    this.image.addClass("object");
    //this.animation = setInterval(animateFrames,500,this);
}
function animateFrames(obj) {
    obj.image.attr("src",obj.frames[obj.frameIndex]);
    ++obj.frameIndex;
    if(obj.frameIndex>=obj.frames.length)
    {
        obj.frameIndex = 0;
    }
}
function Mob(name, srcFrames, height, x, y, isDraggable, index) {
    this.sprite = new Sprite(srcFrames, height,name,index);
    this.posX(x);
    this.posY(y);
    screen.append(this.sprite.image);
    if(name=="bt") {
        var databt = new RandomPatient(index);
        dataMobs.push(databt);
    }
    this.sprite.image.attr("speed", 1);
    this.sprite.image.attr("index",index);
    if(isDraggable) {
        if(name == "bt") {
            if(databt.race!="war")
            this.sprite.image.attr("src", databt.race + ".png");

            this.sprite.image.mousedown(function () {
                event.preventDefault();
                $(this).attr("speed", 0);
                draggNow = $(this);
                offX = event.offsetX;
                offY = event.offsetY;
                $(".zone").css("border", "3px dashed violet")
                var info;
                var id = $(this).attr("index");
                for (key in dataMobs) {
                    if (dataMobs[key].id == id) {
                        info = dataMobs[key];
                    }
                }
                var tag1 = $("#directoryText #info");
                tag1.empty();
                for (key in info) {
                    if (key != "symptoms" && key != "ill") {
                        var p = $("<p>", {
                            css: {
                                margin: "0",
                                padding: "0"
                            }
                        });
                        p.text(key + ": (" + info[key] + ")  ");
                        tag1.append(p);
                    }
                }
                tag1.append($("<img>", {
                    src: $(this).attr("src"),
                    css: {
                        position: "absolute",
                        left: "70%",
                        height: "30%",
                        top: "30%"
                    }
                }));
                var tag2 = $("#directoryText #properties");
                tag2.empty();
                for (key in info.symptoms) {
                    var p = $("<p>", {
                        css: {
                            margin: "0",
                            padding: "0"
                        }
                    });
                    p.text(info["symptoms"][key]);
                    tag2.append(p);
                }
                $(".zone").css("z-index", 2000);
                $("#med1").css("z-index", 2500);
                $("#med2").css("z-index", 2500);
                $("#med3").css("z-index", 2500);
                $("#med4").css("z-index", 2500);
            });
        }else if(name == "item")
        {
            this.sprite.image.mousedown(function () {
                event.preventDefault();
                draggNow = $(this);
                offX = event.offsetX;
                offY = event.offsetY;
            });
        }
    }
    if(name=="bt") {
        this.sprite.image.on("mousedown", function (){
            event.preventDefault();
            openInfo(this);
        });
        this.sprite.image.mouseup(putInBt);
        this.hpBar = $("<div>", {
            id: index,
            class: "hpBar",
            css: {
                left: this.posX() + "px",
                top: this.posY() - 5 + "px"
            }
        });
        this.hpBar.append($("<div>", {
            class: "hpBlock"
        }));

        screen.append(this.hpBar);
    }

    this.sprite.image.attr("area","screen");
    this.name = name;
    this.tasks = {
        "moving" : {
            "x" : this.posX(),
            "y" : this.posY()
        }
    };


}
function createZone(color, x, y, width, height) {
    var x = $("<div>", {
        "id" : color,
        "class" : "zone",
        "css" : {
            "position" : "absolute",
            "width" : width + "px",
            "height" : height + "px",
            "left" : x + "px",
            "top" : y + "px",

        }
    });
    x.select(function () {
        event.preventDefault();
    });
    x.mouseover(putInZone);
    screen.append(x);
}
Mob.prototype.ai = function () {
    randomWalking(this);
    health(this);
}
Mob.prototype.posX = function (value) {
    if(value == undefined) return parseFloat(this.sprite.image.css("left"));
    else return parseFloat(this.sprite.image.css("left", value + "px"));
}
Mob.prototype.posY = function (value) {
    if(value == undefined) return parseFloat(this.sprite.image.css("top"));
    else return parseFloat(this.sprite.image.css("top", value + "px"));
}
function randomWalking(obj) {
    if(moveTask(obj) || obj.sprite.image.attr("mind") == 1)
    {
        obj.sprite.image.attr("mind", 0);
        var id = "#" + obj.sprite.image.attr("area");
        obj.tasks.moving.x = Math.random()*(parseInt($(id).css("width"))
            -parseInt(obj.sprite.image.css("width"))) + parseInt($(id).css("left"));
        obj.tasks.moving.y = Math.random()*(parseInt($(id).css("height"))
            -parseInt(obj.sprite.image.css("height"))) + parseInt($(id).css("top"));

    }
}
function health(obj) {
    if(obj.sprite.image.attr("hp")>=0){

        obj.sprite.image.attr("hp")
        //left : (parseFloat(obj.sprite.image.css("left")) +parseFloat(obj.sprite.image.css("width"))/2) + "px",
        obj.hpBar.css({
            left : parseFloat(obj.sprite.image.css("left")) +parseFloat(obj.sprite.image.css("width"))/2 -50+ "px",
            top : (parseFloat(obj.sprite.image.css("top"))-5)+"px",
        });
        var x = (parseFloat(obj.sprite.image.attr("hp")))/(obj.sprite.image.attr("hpStart"))*100;
        $(obj.hpBar.children()[0]).css({
            width : x + "%",
            left : x/2 +"%"
        });

        if(obj.sprite.image.attr("ill")==1)
            obj.sprite.image.attr("hp", obj.sprite.image.attr("hp") -1);
    }else death(obj);
}
function death(obj) {
    obj.sprite.image.remove();
    obj.hpBar.remove();
}
function moveTask(obj) {
    var x = obj.posX();
    var y = obj.posY();
    var t = obj.tasks.moving;
    var speed =  parseFloat(obj.sprite.image.attr("speed"));
    var len = Math.sqrt((x-t.x)*(x-t.x) + (y-t.y)*(y-t.y));
    var biX,biY;
    if(len==0) {
        biX = 0;
        biY = 0;
    } else {
        biX = (x-t.x)/len;
        biY = (y-t.y)/len;
    }
    x = x - biX*speed;
    y = y - biY*speed;
    obj.posX(x);
    obj.posY(y);

    return Math.abs(x-t.x)<1 && Math.abs(y-t.y)<1;
}
$(document).ready(function () {
   // textData = $.getJSON("data.json"); ЧТО-ТО НЕ РАБОТАЕТ, нужно чтобы он на сервере лежал,
    //а как его сделать?
    $("#add").click(addMob);
    $(document).keydown(stopMove);
    screen = $("#screen");
    screen.mousemove(mouseMove);
    screen.mouseup(function () {
        clearInterval(timerDrag);
        if(draggNow!=null) draggNow.attr("speed",1);
        draggNow = null;
        $(".zone").css("z-index", 0);
        var med1= $("#med1");var med2= $("#med2");var med3= $("#med3");var med4= $("#med4");

        med1.css("z-index", parseInt(med1.css("top"))+ parseInt(med1.css("height")));
        med2.css("z-index", parseInt(med2.css("top"))+ parseInt(med2.css("height")));
        med3.css("z-index", parseInt(med3.css("top"))+ parseInt(med3.css("height")));
        med3.css("z-index", parseInt(med4.css("top"))+ parseInt(med4.css("height")));
    });
    screen.select(function () {
        event.preventDefault();
    });
    timerMain = setInterval(loop, 1000/60);
    drawBase(14, 6, 100);
    drawInterface();
    createMed();
    createItem();
});
function mouseMove() {

    var x = event.clientX;
    var y = event.clientY;
    if(Math.abs(innerWidth - x) < 100&&y<= 500)
    {
        clearInterval(timerScroll);
        timerScroll = setInterval(rightScroll, 10, (100 - Math.abs(innerWidth - x))/4 );
    }else if(x < 100 && y<= 500)
    {
        clearInterval(timerScroll);
        timerScroll = setInterval(leftScroll, 10,(100 - x)/4);

    }else  clearInterval(timerScroll);
    cursorPosX = event.clientX - parseFloat(screen.css("left"));
    cursorPosY = event.clientY;
    if(draggNow!=null)
    draggNow.css({
        "left" : (cursorPosX - offX) +"px",
        "top" : (cursorPosY - offY) + "px"
    });
}
function rightScroll(speed) {
    if(parseInt(screen.css("left")) -speed >-(parseFloat(screen.css("width"))-innerWidth)) {
        screen.css("left", parseFloat(screen.css("left")) - speed);
        cursorPosX+=speed;
        if(draggNow!=null)
        draggNow.css({
            "left" : (cursorPosX - offX) +"px",
            "top" : (cursorPosY - offY) + "px"
        });
    }
    else screen.css("left",-(parseFloat(screen.css("width"))-innerWidth));
}
function leftScroll(speed) {
    if (parseInt(screen.css("left")) + speed < 0) {
        screen.css("left", parseFloat(screen.css("left")) + speed);
        cursorPosX-=speed;
        if(draggNow!=null)
        draggNow.css({
            "left" : (cursorPosX - offX) +"px",
            "top" : (cursorPosY - offY) + "px"
        });
    }
    else screen.css("left", 0);
}
function stopMove() {

}
var coinframe = ["coin.png"];
var maskframe = ["mask.png"];
var cofeframe = ["cofe.png"];
var shetkaframe = ["shetka.png"];
var headframe = ["head.png"];
function createItem()
{
    var coin = new Mob("item", coinframe, 30, 550, 650, true);
    coin.sprite.image.attr("ill", "unluck");
    coin.sprite.image.attr("startx", "550px");
    coin.sprite.image.attr("starty", "650px");
    coin.sprite.image.css({
        position: "fixed",
        "z-index": 10
    });
    var mask = new Mob("item", maskframe, 30, 600, 650, true);
    mask.sprite.image.attr("ill", "cough");
    mask.sprite.image.attr("startx", "600px");
    mask.sprite.image.attr("starty", "650px");
    mask.sprite.image.css({
        position: "fixed",
        "z-index": 10
    });
    var cofe = new Mob("item", cofeframe, 30, 680, 650, true);
    cofe.sprite.image.attr("ill", "tired");
    cofe.sprite.image.attr("startx", "680px");
    cofe.sprite.image.attr("starty", "650px");
    cofe.sprite.image.css({
        position: "fixed",
        "z-index": 10
    });
    var shetka = new Mob("item", shetkaframe, 30, 750, 650, true);
    shetka.sprite.image.attr("ill", "toothache");
    shetka.sprite.image.attr("startx", "750px");
    shetka.sprite.image.attr("starty", "650px");
    shetka.sprite.image.css({
        position: "fixed",
        "z-index": 10
    });
    var head = new Mob("item", headframe, 30, 800, 650, true);
    head.sprite.image.attr("ill", "headache");
    head.sprite.image.attr("startx", "800px");
    head.sprite.image.attr("starty", "650px");
    head.sprite.image.css({
        position: "fixed",
        "z-index": 10
    });
}
var btNow;
function putInBt() {
    if(draggNow!=null && draggNow.attr("id") == "item")
    {
        draggNow.css("display", "none");
        var dataBt;
        draggNow.attr("hide","600");
        var id = $(this).attr("index");
        for(key in dataMobs)
        {
            if(dataMobs[key].id == id){
                dataBt = dataMobs[key];
            }
        }
        btNow = dataBt;
        for(key in data["ill"][dataBt.ill]["symptom"])
        {
            if(key == draggNow.attr("ill"))
            {
                draggNow.attr("isSave",2);
                draggNow.attr("index", id);
            }
        }
        draggNow = null;
    }
}
function createMed() {
    var med1 = new Mob("med1", framesCapsule, 160, 1000, 350, false);
    med1.sprite.image.attr("ill", "rgbantibiotic");
    med1.sprite.image.mouseup(putInMed);
    med1.sprite.image.attr("src", "rgbantibiotic.png");
    med1.sprite.image.click(changeMode);
    var med2 = new Mob("med2", framesCapsule, 160, 1150, 250, false);
    med2.sprite.image.attr("ill", "circlecode");
    med2.sprite.image.attr("src", "circlecode.png");
    med2.sprite.image.mouseup(putInMed);
    med2.sprite.image.click(changeMode);
    var med3 = new Mob("med3", framesCapsule, 160, 825, 250, false);
    med3.sprite.image.attr("ill", "reptilieskiller");
    med3.sprite.image.attr("src", "reptilieskiller.png");
    med3.sprite.image.mouseup(putInMed);
    med3.sprite.image.click(changeMode);
    var med4 = new Mob("med4", framesCapsule, 160, 1000, 150, false);
    med4.sprite.image.attr("ill", "luckpray");
    med4.sprite.image.attr("src", "luckpray.png");
    med4.sprite.image.mouseup(putInMed);
    med4.sprite.image.click(changeMode);
}
function changeMode() {
    var obj = $(this);
    var change = false;
    for(key in meds[obj.attr("id")])
    {
        if(change) {
            obj.attr("ill", key);
            obj.attr("src", key + ".png");
            change=false;
            break;
        }
        if(key == obj.attr("ill")) change = true;
    }
    if(change) for(key in meds[obj.attr("id")])
    {
        obj.attr("ill", key);
        obj.attr("src", key + ".png");
        break;
    }
    console.log(obj.attr("ill"));

}
function drawBase(width, height,sizeBlock) {
    var k = 0.9;
    createZone("violet", 0, 120, 900*k, 530*k );


}
function drawInterface() {

    var tab1 = $("#directory").tabs();
    $("#planet").text(textData["planet"]["gresio"]);
   $(document.body).append($("<img>",{
       src: "front.png",
       css: {
           position: "fixed",
           left: 0,
           top: "70%",
           width: "100%",
           "z-index": "9"
       }
   }));
    createInfo();
}
function createInfo() {
    var dir = $("#directory2 ul");
    for(key in data)
    {
        var li = $("<li>");dir.append(li);

        var a = $("<a>", {
            class : "upTab"
        }); a.text(key); li.append(a);

        var ul =$("<ul>", {
            id : key,
            css : {
                display : "none"
            }
        });li.append(ul);
        a.attr("href", "#" + ul.attr("id"));
        for(key2 in data[key])
        {
            var li2 = $("<li>");
            ul.append(li2);

             var a2 = $("<a>",{
                 class : "lowTab"
             }); a2.text(key2); li2.append(a2);
            var divInfo = $("<div>", {
                class : "textTab",
                id : key2+"info",
                css : {
                    display: "none"
                }
            });
            var div = $("<div>", {
                class : "textTab",
                id : key2,
                css : {
                    display: "none"
                }
            });
            var que1 = $("<a>", {
                class: "que",
                href: "#" + key2

            });
            var que2 =  $("<a>", {
                class: "que",
                href: "#" + key2 + "info"
            });
            que1.text("?");
            que2.text("?");
            for(key3 in data[key][key2])
            {
                var divKey = $("<fieldset>");
                var title = $("<legend>");
                title.text(key3);
                divKey.append(title);
                for(key4 in data[key][key2][key3])
                {
                    var p = $("<div>", {
                        css : {
                            "font-size": "12px",
                            "margin-bottom" : "5px"
                        }
                    });
                    if(data[key][key2][key3][key4]!=0) {
                        p.text(key4 + "(" + data[key][key2][key3][key4] + ") ");
                        divKey.append(p);
                    }
                }
                div.append(divKey);
            }
            if(textData.hasOwnProperty(key)) divInfo.html(textData[key][key2]);
            divInfo.prepend(que1);
            div.prepend(que2);

            $("#directory3").append(divInfo);$("#directory3").append(div);
            a2.attr("href", "#" +div.attr("id"));
        }
    }
    $("a").click(function () {
        event.preventDefault();
        var obj = $(this);
        if(obj.attr("class")=="upTab") {
            var id = $(obj.attr("href"));
            if (id.css("display") == "none") id.css("display", "block");
            else id.css("display", "none");
        }else if(obj.attr("class")=="lowTab"){
            var id = $(obj.attr("href"));
            if (id.css("display") == "none")
            {
                $(".textTab").css("display","none");
                id.css("display", "block");
            }
        }else if(obj.attr("class")=="que") {
            var id = $(obj.attr("href"));
            $(".textTab").css("display","none");
            id.css("display", "block");
        }
    });

}
function openInfo(obj) {
    $("#directory").css("display", "block");
}
function putInMed() {
    if(draggNow!=null && draggNow.attr("id") == "bt")
    {
        draggNow.css("display", "none");
        draggNow.css("left", $(this).css("left"));
        draggNow.css("top", $(this).css("top"));
        console.log(  draggNow.css("left") + " "  +   draggNow.css("top"));
        draggNow.attr("hide","600");
        draggNow.attr("speed", "0");
        var dataDrag;
        for(key in dataMobs)
        {
            if(dataMobs[key].id == draggNow.attr("index")){
                dataDrag = dataMobs[key];
            }
        }
        var id = $(this).attr("id");
        draggNow.attr("isSave",1);
        var mode = $(this).attr("ill");
        for(key in meds[id][mode])
        {
            if(dataDrag.ill == key) {
                draggNow.attr("ill",0);
                draggNow.attr("isSave",2);
            }
            console.log(key);
            console.log(dataDrag.ill);
            console.log( draggNow.attr("isSave"));
        }
        draggNow = null;
    }
}
function putInZone() {
    if(draggNow!=null && draggNow.attr("id") == "bt")
    {
        var id = $(event.target).attr("id");
        draggNow.attr("area", id);
        draggNow.attr("mind", 1);
        $(".zone").css("border", "none");
    }
}
function addMob() {
    var x = new Mob("bt", frames1, 100, 140, 150, true, mobs.length);
    mobs.push(x);
    x.sprite.image.on("click", function () {

    });
    var id = $("#violet");
    x.sprite.image.attr("area", id.attr("id"));
}
function loop(){
    for(var i=0; i<mobs.length; i++) {
        mobs[i].ai();
    }
    $(".object:not(#floor)").each(function () {
        var obj = $(this);
        var oldH = parseFloat(obj.css("height"));

        obj.css("height", parseFloat(obj.attr("alt")) +
            parseFloat(obj.attr("alt")) / innerHeight * parseFloat(obj.css("top")));
        var temp;
        if(oldH - obj.css("height")==0) temp=0;
        else temp = (oldH - obj.css("height"))/2;
        if(obj.attr("id") == "bt")
            obj.css("z-index",parseInt(obj.css("top"))+ parseInt(obj.css("height")) );
        obj.css("left", parseFloat(obj.css("left")) +temp );
        if(obj.attr("hide")>0) obj.attr("hide", obj.attr("hide")-1);
        if(obj.attr("hide")==0){
            if(obj.attr("id") =="bt") {
                obj.attr("speed", 1);
                obj.attr("hide", -1);
                obj.css("display", "block");
                if (obj.attr("isSave") == 1) {
                    obj.attr("hp", obj.attr("hp") / 10);
                }
                if (obj.attr("isSave") == 2) {
                    count++;
                    $("#count").text(count);
                    $(".hpBar#"+obj.attr("index")).remove();
                    obj.attr("hp", obj.attr("hpStart"));
                    obj.remove();
                }
            }else if(obj.attr("id") =="item")
            {
                obj.attr("hide", -1);
                obj.css("display", "block");
                obj.css("left", obj.attr("startx"));
                obj.css("top", obj.attr("starty"));
                var dataob;
                if (obj.attr("isSave") == 2) {
                    var id = obj.attr("index");
                    for(key in dataMobs)
                    {
                        if(dataMobs[key].id == id)
                        {
                            dataob = dataMobs[key];
                        }
                    }
                    console.log(dataob);
                    var already = false;
                    for(key in dataob.symptoms)
                    {
                        if(dataob.symptoms[key]==obj.attr("ill")){
                            already = true;
                        }
                    }
                    if(!already) dataob.symptoms.push(obj.attr("ill"));
                }
            }
        }
    });

}


