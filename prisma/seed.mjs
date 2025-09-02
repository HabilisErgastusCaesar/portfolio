import { PrismaClient } from '@prisma/client'
import stargateData from '../data/stargate/episode.json' assert { type: 'json' }
import stargateAdressesData from '../data/stargate/stargateAddresses.json' assert { type: 'json' }
import stargateCastData from '../data/stargate/stargateCast.json' assert { type:"json" }
import accountData from '../data/logins/accounts.json' assert { type: 'json' }
import QandAData from '../data/learning/QandAData.json' assert { type: "json" }
import Players from '../data/game/playerProfile.json' assert { type:"json" }
import PlayerCitys from '../data/game/data/playerCitys.json' assert { type:"json" }
import MainBuildings from '../data/game/data/mainBuilding.json' assert { type:"json" }
import MainBuildingsLevels from '../data/game/data/levels/mainBuildingLevel.json' assert { type:'json' }
import {v4 as uuidv4} from 'uuid';

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] })

async function main () {
  for (const episodeData of stargateAdressesData) {
    await prisma.stargateAddress.upsert({
      where: {
        id: episodeData.id,
      },
      create: {
        id: episodeData.id,
        address: episodeData.address,
      },
      update: {
        address: episodeData.address,
      },
    });
  }

  for (const logins of accountData.account) {
    await prisma.account.upsert({
      where: {
        id: logins.id,
      },
      create: {
        id: logins.id,
        username: logins.username,
        password: logins.password,
        name: logins.name,
        email:  logins.email,
        logged:  logins.logged
      },
      update: {
        username: logins.username,
        password: logins.password,
        name: logins.name,
        email:  logins.email,
        logged:  logins.logged
      },
    });
  }

  for (const item of Players) {
    await prisma.player.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        userId: item.userId,
        progress_day: item.progress_day,
        progress_week: item.progress_week,
        progress_month: item.progress_month,
        progress_year: item.progress_year,
        currentAge: item.currentAge,
        city: item.city,
        resources: item.resources,
        population: item.population,
      },
      update: {
        userId: item.userId,
        progress_day: item.progress_day,
        progress_week: item.progress_week,
        progress_month: item.progress_month,
        progress_year: item.progress_year,
        currentAge: item.currentAge,
        city: item.city,
        resources: item.resources,
        population: item.population,
      },
    });
  }
  for (const item of stargateCastData) {
    await prisma.stargateCast.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        name: item.name,
        rol: item.rol,
        numberOfEpisodes: item.numberOfEpisodes,
        yearsActive: item.yearsActive,
        atlantisSeasonOne: item.atlantisSeasonOne,
        atlantisSeasonTwo: item.atlantisSeasonTwo,
        atlantisSeasonThree: item.atlantisSeasonThree,
        atlantisSeasonFor: item.atlantisSeasonFor,
        atlantisSeasonFive: item.atlantisSeasonFive,
        atlantis: item.atlantis,
        img: item.img
      },
      update: {
        name: item.name,
        rol: item.rol,
        numberOfEpisodes: item.numberOfEpisodes,
        yearsActive: item.yearsActive,
        atlantisSeasonOne: item.atlantisSeasonOne,
        atlantisSeasonTwo: item.atlantisSeasonTwo,
        atlantisSeasonThree: item.atlantisSeasonThree,
        atlantisSeasonFor: item.atlantisSeasonFor,
        atlantisSeasonFive: item.atlantisSeasonFive,
        atlantis: item.atlantis,
        img: item.img
      },
    });
  }
  for (const item of MainBuildingsLevels) {
    await prisma.mainBuildingLevel.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        buildNeeds: item.buildNeeds,
        buildNeedsNumber: item.buildNeedsNumber,
        width: item.width,
        height: item.height,
        img: item.img,
        buildTime: item.buildTime,
        needs: item.needs,
        production: item.production,
        age: item.age,
        upgradeBuildingType: item.upgradeBuildingType
      },
      update: {
        buildNeeds: item.buildNeeds,
        buildNeedsNumber: item.buildNeedsNumber,
        width: item.width,
        height: item.height,
        img: item.img,
        buildTime: item.buildTime,
        needs: item.needs,
        production: item.production,
        age: item.age,
        upgradeBuildingType: item.upgradeBuildingType
      },
    });
  }
  
  for (const item of PlayerCitys) {
    await prisma.playerCitys.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        userId: item.userId,
        mainBuilding : item.mainBuilding,
        civilBuidlings: item.civilBuidlings,
        militairyBuildings: item.militairyBuildings,
        economicBuildings: item.economicBuildings,
        covermentBuildings: item.covermentBuildings
      },
      update: {
        userId: item.userId,
        mainBuilding : item.mainBuilding,
        civilBuidlings: item.civilBuidlings,
        militairyBuildings: item.militairyBuildings,
        economicBuildings: item.economicBuildings,
        covermentBuildings: item.covermentBuildings
      },
    });
  }

  for (const item of MainBuildings) {
    await prisma.mainBuilding.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        userId: item.userId,
        x: item.x,
        y: item.y,
        width: item.width,
        height: item.height,
        popup: item.popup,
        currentLevel: item.currentLevel,
        type: item.type,
        modules: item.modules,
        levels: item.levels,
        buildNeeds: item.buildNeeds,
        img: item.img,
        buildTime: item.buildTime,
        residents: item.residents
      },
      update: {
        userId: item.userId,
        x: item.x,
        y: item.y,
        width: item.width,
        height: item.height,
        popup: item.popup,
        currentLevel: item.currentLevel,
        type: item.type,
        modules: item.modules
      },
    });
  }

  for (const question of QandAData) {
    await prisma.QandA.upsert({
      where: {
        id: question.id,
      },
      create: {
        id: question.id,
        userId: question.userId,
        questionType:question.questionType,
        type:question.type,
        question:question.question,
        answer:question.answer,
        right:question.right,
        wrong:question.wrong,
        total:question.total,
        description:question.description,
        language:question.language,
        Timer:question.Timer,
      },
      update: {
        questionType:question.questionType,
        type:question.type,
        question:question.question,
        answer:question.answer,
        right:question.right,
        wrong:question.wrong,
        total:question.total,
        description:question.description,
        language:question.language,
        Timer:question.Timer,
      },
    });
  }


  for (const seriesName in stargateData) {
    const seasons = stargateData[seriesName];

    if (Array.isArray(seasons)) {
      for (const season of seasons) {
        const seasonName = season.name;
        const episodes = season.episodes;

        if (Array.isArray(episodes)) {
          for (const episode of episodes) {

          const processedWrittenBy = [];
          if (Array.isArray(episode.writtenBy)) {
            for (const item of episode.writtenBy) {
              if (typeof item === 'string') {
                processedWrittenBy.push(item);
              } else if (typeof item === 'object' && item !== null) {
                for (const key in item) {
                  if (typeof item[key] === 'string') {
                    processedWrittenBy.push(item[key]);
                  }
                }
              }
            }
          }

          const imgCollection = Array.isArray(episode.imgCollection) ? episode.imgCollection : [];
          const videoCollection = Array.isArray(episode.videoCollection) ? episode.videoCollection : [];
          const alienRaces = Array.isArray(episode.alienRaces) ? episode.alienRaces : [];
          const stargateAdresses = Array.isArray(episode.stargateAdresses) ? episode.stargateAdresses : [];
          const pointOfOrigin = Array.isArray(episode.pointOfOrigin) ? episode.pointOfOrigin : [];
          const cast = Array.isArray(episode.cast) ? episode.cast : [];
          const locations = Array.isArray(episode.locations) ? episode.locations : [];


          const episodeData = {
            id: episode.id, 
            name: episode.name,
            airDate: episode.airDate,
            description: episode.description,
            img: episode.img,
            video: episode.video,
            directedBy: episode.directedBy,

            series: seriesName,
            season: seasonName,

            imgCollection: imgCollection,
            videoCollection: videoCollection,
            alienRaces: alienRaces,
            stargateAdresses: stargateAdresses,
            pointOfOrigin: pointOfOrigin,
            writtenBy: processedWrittenBy, 
            cast: cast,
            locations: locations,
          };

          try {
            await prisma.episode.upsert({
              where: { id: episodeData.id },
              update: episodeData,
              create: episodeData,
            });
          } catch (error) {
            console.error(`Error upserting episode ${episodeData.id}:`, error);
          }
        }
      } else {
        console.warn(`Expected 'episodes' array in season '${seasonName}' of series '${seriesName}', but found something else.`);
      }
      }
    } else {
      console.warn(`Expected seasons array for series '${seriesName}', but found something else.`);
    }
  }
  console.log('Seeding process finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })