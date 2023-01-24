'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { seedUsers } = require('../../utils/fakerSeed.js')

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: 'Mariano2@hotmail.com',
        username: 'Jimmy16',
        hashedPassword: '$2a$10$3Dlz56ViVvHZzyfrJ4KTmuOs.xsLQCDs1/Yjd7G5yPMW.2FffN4H.'
      },
      {
        email: 'Karli.Bergnaum19@yahoo.com',
        username: 'Lisa.Klein93',
        hashedPassword: '$2a$10$Zd5TxdPwb.NOcunrxIP.CO6z3EDuVAyuWIsb.2z3x88cDmvSRh1Pm'
      },
      {
        email: 'Damaris.Rice74@gmail.com',
        username: 'Alfred25',
        hashedPassword: '$2a$10$RefaQCjYzOoTFSp117vF6u0t3Z2bDB2riirlvS1Xq.6TMWlOWBpXC'
      },
      {
        email: 'Alyce.Hodkiewicz52@gmail.com',
        username: 'Lourdes.Luettgen97',
        hashedPassword: '$2a$10$hjpdIMJ2rT3vbd1Zz4zA2.qVIls.Hfjo0EGp1fsrLcBiomLeIQeF.'
      },
      {
        email: 'Kaden54@hotmail.com',
        username: 'Timmy8',
        hashedPassword: '$2a$10$BscVajxQRQlqN5/x81EoSufqe.RotJuVPk14DaU4caO4KgXTK3e9m'
      },
      {
        email: 'Glen.Stanton@gmail.com',
        username: 'Esteban.McGlynn17',
        hashedPassword: '$2a$10$ImImsjsnS4TDJLyaj1S3MuI4zKBB8xlMESCCnu9iYJLVytMYBqPzq'
      },
      {
        email: 'Jaylan.Harris@hotmail.com',
        username: 'Erika98',
        hashedPassword: '$2a$10$6gjX/EugAeOeEEOosg0kC.FuhO7ZlxB.iSjXs7inDF91hU.PZYkYK'
      },
      {
        email: 'Dena_Crist@hotmail.com',
        username: 'Clinton98',
        hashedPassword: '$2a$10$iwSU4GQOnwHBVMDcalxd7uyLIeWRRuUEhpGgMQz70rrU.bpVgC1P.'
      },
      {
        email: 'Morris28@gmail.com',
        username: 'Jamaal.Stehr22',
        hashedPassword: '$2a$10$wkm1D3FJRnCbIRL.6udwOOFu7qKFow15yBmt.TJEzJqHM.bHpcxqi'
      },
      {
        email: 'Aida.Brekke@gmail.com',
        username: 'Hertha57',
        hashedPassword: '$2a$10$d44vN5cJSv8n1pGet91dw.kcCBwMfqwHcVAGJ/5JdnYOQkspuJnUW'
      },
      {
        email: 'Spencer_Sauer56@hotmail.com',
        username: 'Blair_Wolff',
        hashedPassword: '$2a$10$b1UQhzcLAHKCmcgqcSEHr.vLNZX0uo/6rw588q3ZU/XR1g5D3LXuC'
      },
      {
        email: 'Milford66@hotmail.com',
        username: 'Marvin62',
        hashedPassword: '$2a$10$WrtO23CHOP7fceum431D..8Yhy12ONmCaVHINYvKolayAQjPyuh0y'
      },
      {
        email: 'Jarrell4@yahoo.com',
        username: 'Berry81',
        hashedPassword: '$2a$10$XwZwdE1LWV1iVCc4yAbPFOx7d2vMUso0MbYPcOJn/lNABywXTEw96'
      },
      {
        email: 'Zion74@yahoo.com',
        username: 'Esta_Auer',
        hashedPassword: '$2a$10$yrbWtxAvIYHVwlkmnaiJgepf4zzPntCAuhNgUVqercusHd/GXmJ3i'
      },
      {
        email: 'Jesse45@hotmail.com',
        username: 'Ahmad_McKenzie90',
        hashedPassword: '$2a$10$UPyEuAGklgkiFqLYeHjkCuOFM0dlPHg5DkoBSzWsEk.PguO3u21Za'
      },
      {
        email: 'Adriel13@gmail.com',
        username: 'Lorena15',
        hashedPassword: '$2a$10$TXTxbvZ4Mc6VJVYgLbfw/.idQFMEutdqLuto0d7vLGWNxo.pFMZRO'
      },
      {
        email: 'Anthony.Feeney51@gmail.com',
        username: 'Rhoda91',
        hashedPassword: '$2a$10$d8B.l.VrKG9.63cw7/Bt3OOwdq7oRdr0FIMq/7JiI2sj.lRZeVp.y'
      },
      {
        email: 'Donny19@gmail.com',
        username: 'Jordan87',
        hashedPassword: '$2a$10$pVn2hy/U0/esbdUH3Ycu3uE.bdZ3/eDVidLk8HwNTrcZYL7vqSAGq'
      },
      {
        email: 'Pablo.Paucek@gmail.com',
        username: 'Emmalee17',
        hashedPassword: '$2a$10$w0OLztf5RqA9mlR8KNCjzeDDIxU64onrKydku.SbLxrjRmF4v64n.'
      },
      {
        email: 'Domenick_Fadel34@gmail.com',
        username: 'Shayna_Erdman',
        hashedPassword: '$2a$10$F0c0qCISaSnou.uQsesaYerET/MkpEYIFqu/jchL4zIu67Ef4lzSO'
      },
      {
        email: 'Brett81@gmail.com',
        username: 'Tevin_Daugherty',
        hashedPassword: '$2a$10$jpZDjo54z46q/WBx3LVkse4iAmOfNHv2LGR.eUPCwtY59d0LM9aUC'
      },
      {
        email: 'Hubert.Ratke@yahoo.com',
        username: 'Billy_Wisoky',
        hashedPassword: '$2a$10$Jv5Sc3lbwPFTVuOxtv17WOEMBLYcvq3273qSv9zt23SGaupPp2vle'
      },
      {
        email: 'Reanna_Williamson@gmail.com',
        username: 'Lizzie.Braun46',
        hashedPassword: '$2a$10$ARpkTxF8csxZJAshp4vvYeaXjK.bLkwh2/d5aOmY8nbreyb2EoRY.'
      },
      {
        email: 'Jalyn_Nader@yahoo.com',
        username: 'Darryl9',
        hashedPassword: '$2a$10$cc9BozI.RHgrLoieC/C2Me/xLyqFzZrQvZBmeuZIjbEvnvefysRmG'
      },
      {
        email: 'Sheridan25@yahoo.com',
        username: 'Donna.OConner',
        hashedPassword: '$2a$10$DY161bkqy1DPVFR5IoCJce5ETUS30ZqMOsZKzmUmkCfuxrPEtkPbe'
      },
      {
        email: 'Fannie.Stroman@hotmail.com',
        username: 'Santina56',
        hashedPassword: '$2a$10$ebQisjHLTFkipnlhhT00SeUeMLruuWXe9OvcLgXEcuYLh.H5xnz06'
      },
      {
        email: 'Jordi7@hotmail.com',
        username: 'Corene_Russel',
        hashedPassword: '$2a$10$kQRnWH6rI.iGksUxyBWoceL3jtSzE1Kqe.coJ5X/iZ1J75QiZbbiK'
      },
      {
        email: 'Emmett11@yahoo.com',
        username: 'Felipe_Franey31',
        hashedPassword: '$2a$10$BBVXfbmpEMIfnvZ3QqplRePl8endNZQm8.ZwGhLYgLfcbr6f/mnqy'
      },
      {
        email: 'Verner91@gmail.com',
        username: 'Geo.Murray74',
        hashedPassword: '$2a$10$dgJdq8Yrpz8iyKhz/jfUf.j6Jle3K49Up.WBi278CWAL1hKkhrmwu'
      },
      {
        email: 'Arnoldo_Schamberger@gmail.com',
        username: 'Orrin.Kutch43',
        hashedPassword: '$2a$10$MUbRr1Q3Qpdiki7CrUSxVuORqAuXHb2xV3JtnuyFt6lceL0lktW8O'
      },
      {
        email: 'Natalia.Hauck@yahoo.com',
        username: 'Anabel_Hilll47',
        hashedPassword: '$2a$10$HO2cQR4G8Efa8AG8Da9v/.wvG2O1T3iZlnyOD8rxOsx9Y81mO07Hm'
      },
      {
        email: 'Oral_Stiedemann@hotmail.com',
        username: 'Austen85',
        hashedPassword: '$2a$10$hS9ZVfMAq1.OTvsxno9bpO8yNZHMSTQTNxYRPOlkKCKmpHT1i2Z/i'
      },
      {
        email: 'Cameron20@hotmail.com',
        username: 'Delfina.Wyman92',
        hashedPassword: '$2a$10$iONxOSAZg/SUJk3Cdw.B9ua/mQPT6kK44fPr7F5Ul5PWgaZi7BGfW'
      },
      {
        email: 'Timmy_Kreiger39@gmail.com',
        username: 'Alycia_Beer',
        hashedPassword: '$2a$10$OE.gf3Im30pMdzzUE5hIs.eJTB2Wv3u/jXjfEN.C9cgfIBoVHni3S'
      },
      {
        email: 'Eduardo.Jacobi@yahoo.com',
        username: 'Erick41',
        hashedPassword: '$2a$10$l/6cCN3oRzfsxZlwwqACmuDGZOLWC/8chuUZL2nW45DTh834635wy'
      },
      {
        email: 'Jody_Barton@hotmail.com',
        username: 'Liliane_Murray58',
        hashedPassword: '$2a$10$tS8IscXqs4QW6fCRCTRj.OEsK1bwGTsj2WJ92sRE2IzTlDH6eFFdu'
      },
      {
        email: 'Neha74@gmail.com',
        username: 'Asia92',
        hashedPassword: '$2a$10$7WoLtWJ4o0FNeX.dnpxPcuceM7mdTUKUdqUuAFb3VCiF0DhQOitJW'
      },
      {
        email: 'Tate.Harvey@gmail.com',
        username: 'Bridie.Cassin',
        hashedPassword: '$2a$10$3pQU7OftTPC4tPkZ/Qnd/OPKpAuUxbItkiWcoDU1xUW/zSZ/c4m02'
      },
      {
        email: 'Verda_Crona41@gmail.com',
        username: 'King.Smith82',
        hashedPassword: '$2a$10$ma6ruF5YHQNkSsQNCUKTyOiWfmRG4/qhfYqqf4jIW4i9gOY02pxbi'
      },
      {
        email: 'Terrill.Watsica26@yahoo.com',
        username: 'Adriana_Frami',
        hashedPassword: '$2a$10$0VgHnsB3DfBwr1/mL0X27uHBVOfGSS1cEmOrBoJZpf2qrVJmnaOPG'
      },
      {
        email: 'Moises_Hills9@gmail.com',
        username: 'Katlynn_Reinger15',
        hashedPassword: '$2a$10$/AgkTKqrLiG7AzaOYxGwBuT/YIY1OqjtXHq7ezcXtzztvrWk0akZW'
      },
      {
        email: 'Savannah_Lehner38@gmail.com',
        username: 'Daphne.Kozey32',
        hashedPassword: '$2a$10$qZRCWzArZOpAVux02f/oMeb0nV1dALI3TEkNX/FLuIsjVyAkXiIga'
      },
      {
        email: 'Verla18@gmail.com',
        username: 'Jackson69',
        hashedPassword: '$2a$10$/KxBZdHlaBw2DyXWiQ6UYepXxVYI6ocsh4hd057mWLVis6WTiA4Hm'
      },
      {
        email: 'Stanford.Bauch@yahoo.com',
        username: 'Adam86',
        hashedPassword: '$2a$10$/APtb6p6/HQYWngpsu3ahetGRsCI/VFgFV0M3BQsbLTrJXLBgfPge'
      },
      {
        email: 'Imogene_Vandervort26@gmail.com',
        username: 'Gavin.Brown82',
        hashedPassword: '$2a$10$wu9ZNk3WGidyfvE8CGYFpOQnF83TAppSbRFrw5odSFUJKWTEviHJS'
      },
      {
        email: 'Pasquale.Medhurst@gmail.com',
        username: 'Tate.Terry71',
        hashedPassword: '$2a$10$EFvFkctRwpcyNQ6vTK0fAeyxkMohN8mFg0eJ7JqLEX2UZ6FXnPTx6'
      },
      {
        email: 'Lesley41@gmail.com',
        username: 'Joyce.Thompson75',
        hashedPassword: '$2a$10$Zrq9HHzWp.IW52F2LnJuMewRFmpCXuLWzOybQoiTER/jQi6D0SReq'
      },
      {
        email: 'Cora.Quigley@gmail.com',
        username: 'Lonny2',
        hashedPassword: '$2a$10$e8qAo./d2qZBSYR/OTBtsOrq/iWOj/E5nIg4dclzyt0pweo3xISXu'
      },
      {
        email: 'Laura_Hintz@yahoo.com',
        username: 'Whitney_Larkin32',
        hashedPassword: '$2a$10$gKXKQWOaidIBwRlAPNBmfe.ycEPWf.J9FJCtZPCln7QLyzQgNAsw2'
      },
      {
        email: 'Aileen.Gerlach@gmail.com',
        username: 'Francis.Stokes',
        hashedPassword: '$2a$10$KXbsqMWKLr1gEcBDHWZcjOyfmwfjbMGS.1YrwHcf8qlFxRJgIV4OC'
      },
      {
        email: 'Julia.Kris88@yahoo.com',
        username: 'Leonardo_Swaniawski27',
        hashedPassword: '$2a$10$ZqvHU5JFEeC47.xfeeO5Ne9K8926fumnWQu5.izgsZFw6cMHLT..S'
      },
      {
        email: 'Al_Bahringer@yahoo.com',
        username: 'Reta_Boehm66',
        hashedPassword: '$2a$10$OKrjOmWnEtxejhcrBYd5x.q9MTZbbxAB4F2bcCrE.6PKOWSVsFXn.'
      },
      {
        email: 'Hillary_Bosco20@yahoo.com',
        username: 'Marguerite.Lesch',
        hashedPassword: '$2a$10$NNclxRgcBe2UM6XyoQyYnefCfOd/ziLubtpwt.bHyJvPFGpHtQ1Ba'
      },
      {
        email: 'Abner94@hotmail.com',
        username: 'Yasmine_Prosacco',
        hashedPassword: '$2a$10$BOsTyMDs/WXQLXqe86F.Xu0p6Iun6.f8.pJaQNuD/Qv686N/UWxz6'
      },
      {
        email: 'Braden12@hotmail.com',
        username: 'Marlon.Fritsch',
        hashedPassword: '$2a$10$ypOZ377XkCCuQczfZpHuKeRx4V8/RWUKZIdUYozkv6N81/5GfmVIO'
      },
      {
        email: 'Oscar15@yahoo.com',
        username: 'Wilson.Kuhic11',
        hashedPassword: '$2a$10$kpB2HROZY8mLlVqdGgDynehERdBFJnLy7iOEiqpCWH9Xl39qrvwSO'
      },
      {
        email: 'Brennon.Dibbert@yahoo.com',
        username: 'Dameon_Murazik89',
        hashedPassword: '$2a$10$Kd1wWvJJEtJQ3DHh25RVD.qi.nAd.Zee1MfWn2a0eR/7ofdTMnRTC'
      },
      {
        email: 'Gayle33@hotmail.com',
        username: 'Ryann.Rath',
        hashedPassword: '$2a$10$TxQXFcvhSgYD72oinVaczecThq3cDjAp1SJCbHFJujFsK/rRU23We'
      },
      {
        email: 'Michel77@hotmail.com',
        username: 'Sammy_Cormier',
        hashedPassword: '$2a$10$ePrzWhURslU9DeOxDPkKQudLxznK8ebgQAvzDyFCaqXWcIFjQ8cdO'
      },
      {
        email: 'Jordyn_Schmeler36@gmail.com',
        username: 'Jolie_Beier8',
        hashedPassword: '$2a$10$n8D804H9Hdv0G5Ij5FXfHegKmEoW1cKPfhNajTwFQ5Pr2S3EvhmH2'
      },
      {
        email: 'Kareem64@yahoo.com',
        username: 'Selena.Carroll74',
        hashedPassword: '$2a$10$HvA2AwOrK/VtsXq/duDP/OnSrxkW3Unfn4UFLGHCnST06yUHtUqni'
      },
      {
        email: 'Stanton_Schultz@gmail.com',
        username: 'Miracle.Prohaska',
        hashedPassword: '$2a$10$quBBVeqQIQ.7Cx6NQXm8nuHzpl/vzMN9JzNXk2ZKjTfJ7fd/13Bx2'
      },
      {
        email: 'Zora.Hirthe61@hotmail.com',
        username: 'Carmen17',
        hashedPassword: '$2a$10$LfO2xtFVqW8BSKrIJ8/PBuZCrv/NkUVsTdeeLs.sN1MyV3hYPRgsi'
      },
      {
        email: 'Durward_Larson11@hotmail.com',
        username: 'Giles84',
        hashedPassword: '$2a$10$oYEkae1hM.FCRqEUlBqbAuI6eyQwPkNLjfkpCJlPzg4cUdWQ2BRbG'
      },
      {
        email: 'Athena_Osinski99@gmail.com',
        username: 'Jaylin64',
        hashedPassword: '$2a$10$HmQTup2MLz5DhYKXQp1hZODkwEJ.ERgwMUc1b4s0eYSM6ZZSYXAL2'
      },
      {
        email: 'Albina.Christiansen23@hotmail.com',
        username: 'Trystan.Cremin',
        hashedPassword: '$2a$10$epsgt5IFPW5y5TpVR8D11OcNfdHmAtDg.iUXN.GbGtRVRyvSCR1yq'
      },
      {
        email: 'Theresa.Daugherty@yahoo.com',
        username: 'Kayli46',
        hashedPassword: '$2a$10$EIVyzX.V.UyVxQjDwBd0/OZLk3VJtba7DGT/4TuFfen.ynwQUfrp2'
      },
      {
        email: 'Jodie.Smitham@hotmail.com',
        username: 'Nikki89',
        hashedPassword: '$2a$10$OgHDaFYXA9OvC9ja0ztN1.FwqwFPmOkJN2ec.U5Hu6g1wg5YIkpyC'
      },
      {
        email: 'Lafayette_Schaefer@yahoo.com',
        username: 'Stewart99',
        hashedPassword: '$2a$10$n1jEMf8xIIOaxiX3AlJPR.VGjfSKou7DGTQLKI5zy7B34qz.dc.1.'
      },
      {
        email: 'Savanna84@hotmail.com',
        username: 'Elvis96',
        hashedPassword: '$2a$10$9VcqrbmQAYDOnCZiM8NH8eXO6YIiVLkewMmB5kVhUH3if0jweeXza'
      },
      {
        email: 'Rosalyn_Smith@gmail.com',
        username: 'Angelita_Hilpert',
        hashedPassword: '$2a$10$WfhM1hGEcfjXp.5xgIgL4u0WD/iEcDaVycfjZ0oSeq9/gmXgTQxdO'
      },
      {
        email: 'Max28@gmail.com',
        username: 'Teagan80',
        hashedPassword: '$2a$10$.89RdXwWiIkRQW0gLxNBlOoSpJxapHXh2Emcki3Otf9njNgivVdrG'
      },
      {
        email: 'Bettie.Terry@gmail.com',
        username: 'Fabian_Tillman27',
        hashedPassword: '$2a$10$gx3t2JTW0GBkQBYaaXNYEuATAIPx/4YPKvCSMkVfVBZtc6yX.mk32'
      },
      {
        email: 'Royal_Willms@hotmail.com',
        username: 'Daisy.Franecki',
        hashedPassword: '$2a$10$fzzcCIKb/QqmOreaZFtxY.fnVUFzRGXm3E.EULUDIIiMZdMSNrEqG'
      },
      {
        email: 'Geovany.Hickle@hotmail.com',
        username: 'Shaylee_Weimann',
        hashedPassword: '$2a$10$/UvHLa78YQ17O9cbots.4eJYgXGsAOK6NIu4tc99OmHUFp3dshgxm'
      },
      {
        email: 'Monroe37@yahoo.com',
        username: 'Araceli39',
        hashedPassword: '$2a$10$W2l9xJJ3seA5PVRag4sBJ.k.zFCytoKrnd7j5SMMQMldFNWVio3Ze'
      },
      {
        email: 'Retha35@hotmail.com',
        username: 'Genoveva57',
        hashedPassword: '$2a$10$ujWCYnIp..AStHLzvbruO.BH/uURmhayJGpExPbtEHkwOPlrGwZ5C'
      },
      {
        email: 'Lillie.Gaylord@yahoo.com',
        username: 'Daphnee.Leffler60',
        hashedPassword: '$2a$10$E04Dg9ikFfj5Rfz.nEnxvOVGS3.VgRlXusASsa2mnUj6hdjOLCQty'
      },
      {
        email: 'Kyra80@yahoo.com',
        username: 'Sean_Barrows',
        hashedPassword: '$2a$10$lvUXH/1rylSW1bte.dZbf.6h.fOaStbwrPxJnCY5GrkkzFols64Nm'
      },
      {
        email: 'Stephon4@hotmail.com',
        username: 'Jerrod_Boyer87',
        hashedPassword: '$2a$10$cUXj8JfkuBv.UIzOjVgaVuzbUEkOpqyBRDocEa2R/JaVzQU1TmQsq'
      },
      {
        email: 'Bailee_Terry61@gmail.com',
        username: 'Zelma_Jones',
        hashedPassword: '$2a$10$GFaOSbwX6n8KMT3B79Sieeuii64K3o.Yy5HI5p/s7a2lVDmn1h55S'
      },
      {
        email: 'Ibrahim.Wuckert@hotmail.com',
        username: 'Merle63',
        hashedPassword: '$2a$10$qS2fcnTc2vaKqnqs/VosneGE4LWAgHlfC9EkLBKedfhW/FxxgR9by'
      },
      {
        email: 'Mack.Bosco46@hotmail.com',
        username: 'Imani_Becker94',
        hashedPassword: '$2a$10$2v6AvZQ4Bmszdms68yughu58rlgRkYCYTvrcD90LUNEykTxMKbGdW'
      },
      {
        email: 'Louie.Zemlak83@gmail.com',
        username: 'Antonetta47',
        hashedPassword: '$2a$10$PH22dc4XiuInkxSQpQc/veNMbkHErMoz4YcCVV8OdJm0hibCpQpC6'
      },
      {
        email: 'Khalil.Reynolds@gmail.com',
        username: 'Millie_Raynor76',
        hashedPassword: '$2a$10$gsviUd1nfBuSyUMTy8VuJ.1XsKmcKPzZWiI0m9zdTDvrUu0GdtCvi'
      },
      {
        email: 'Stuart76@gmail.com',
        username: 'Asha81',
        hashedPassword: '$2a$10$muq/GdmPfkiW1g.xGYaXwuVQ2WJOnl.lNg/VxYlO1qTDUUDi6sX9e'
      },
      {
        email: 'Elmore24@gmail.com',
        username: 'Corrine.Ortiz',
        hashedPassword: '$2a$10$.UGHChHNaOwmPm6otuvy9elPS.45NuFwGJD07pzn6Rs/C0MlbDvZ6'
      },
      {
        email: 'Jerald_Botsford32@hotmail.com',
        username: 'Jovanny_Kuvalis11',
        hashedPassword: '$2a$10$8QtCftPknSaOrFUUGN9rOuOsE9DAH0hmfB85Luyqj62qWQfKmtSTu'
      },
      {
        email: 'Jerrell.Leffler73@yahoo.com',
        username: 'Kaci.Flatley',
        hashedPassword: '$2a$10$vz1U4pTgmV.MIJlPYC492.MuLCv.a92QJzYrPa6nAPRewV9MxkEiu'
      },
      {
        email: 'Sadie_Farrell38@hotmail.com',
        username: 'Ashlee9',
        hashedPassword: '$2a$10$ALkwwYw/NG/Qaby8yOE6le5kGc1j0Iz39MUvzA9Y6efzuUvT1xPN.'
      },
      {
        email: 'Ariane84@hotmail.com',
        username: 'Eliseo_Pfeffer27',
        hashedPassword: '$2a$10$yQ5BBkaSTAfAS4RYtES.Xu9p7pd.tSHw2tteq.SRy3J2ognTcktDC'
      },
      {
        email: 'Ali.Welch@yahoo.com',
        username: 'Ryan33',
        hashedPassword: '$2a$10$R2ZhgFPYBIABezAs4jCSxurPBnv2NmnY0dw8lGNC8xJZabtk4Q9p6'
      },
      {
        email: 'Sophia91@hotmail.com',
        username: 'Jayson98',
        hashedPassword: '$2a$10$j3PFFi.EIN6jkKBQ3k8eb.C8saNgVOmDEU5lRE4f0s1po2mxYIEMS'
      },
      {
        email: 'Vivienne40@hotmail.com',
        username: 'Russel.Corwin',
        hashedPassword: '$2a$10$nN2lW.RcSIFqEvcj4NfomujkN2urW.4AkKPTkHV2gYJDkVhj.Ot8G'
      },
      {
        email: 'Marjolaine.Schaden67@yahoo.com',
        username: 'Liam.Crist',
        hashedPassword: '$2a$10$oL0fsa9FNSjoXRJURbUFvub0fDEtiEy54HjJV9POF6gW.FbVPM1Ay'
      },
      {
        email: 'Antonietta_Kreiger89@gmail.com',
        username: 'Gonzalo.Fritsch54',
        hashedPassword: '$2a$10$DJU9YZ9oPzJkf4yWJMdaju5ixBuWBBm8QJ1iSmcggHf3o7DdDkNga'
      },
      {
        email: 'Vicente_Rolfson@yahoo.com',
        username: 'Melisa.Stanton71',
        hashedPassword: '$2a$10$r5n6MSfTl0mZCcDTSWt2qOHIm/b1/2EjuJhDREUi9qtK1Hs68nds.'
      },
      {
        email: 'Jarret6@yahoo.com',
        username: 'Lukas.Huel',
        hashedPassword: '$2a$10$zXgt3E8e5N1l.rNP8/W.F.cFO5RjKqZiLEkFdgXteikLfTqluXW5C'
      },
      {
        email: 'Paxton.Baumbach94@hotmail.com',
        username: 'Baby48',
        hashedPassword: '$2a$10$/2JrKSG87Y3ICRcIBPqoyuSMKLrzlCYQ3lrhWXGMMY01LZIBllkdO'
      },
      {
        email: 'Prince19@gmail.com',
        username: 'Milton67',
        hashedPassword: '$2a$10$BLobEbFibn6D4EcxMxOKvey2RUzs.T3A6EdgCG6p2wOzVll76Tciy'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
