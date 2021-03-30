'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [{
      email: 'Kaycee.Keebler23@gmail.com',
      username: 'Bonnie81',
      hashedPassword: '$2a$10$SPnGSGgu1Rc6xlbsVoDcX.3to0HKqCz9Q/nCFPSjj/vzC8hb6Mjj6'
    },
    {
      email: 'Karen_Osinski49@yahoo.com',
      username: 'Leslie94',
      hashedPassword: '$2a$10$CnXpL292GTXKJb60PBxOweISkodGvDeFFDnHgglM9ZGfqvZuFjCXi'
    },
    {
      email: 'Roselyn58@hotmail.com',
      username: 'Judge_Douglas77',
      hashedPassword: '$2a$10$5yVRKAgBQDtBu5KYaQGhReaxLMJO3mrVpYM.ZAPy2VzO8TWj93lqq'
    },
    {
      email: 'Virginia_Stoltenberg@hotmail.com',
      username: 'Joaquin_Doyle',
      hashedPassword: '$2a$10$KdtWoUnDEU8qK0E7KOdnm.EqynOfIArYzasajIWEqxqn3r8bOVyj6'
    },
    {
      email: 'Magnolia.Rolfson12@yahoo.com',
      username: 'Maxwell.Boyle91',
      hashedPassword: '$2a$10$paRIZ5RkhmXmFiPWZ8/uR.k5yg1pjvrnuLUzpvRPG1LSVmi8w.kDS'
    },
    {
      email: 'Christiana14@yahoo.com',
      username: 'Jeanie_Shanahan88',
      hashedPassword: '$2a$10$Ftc1lh8zKsDyddeOCyHifuG4avDIqmay7988kDh325Vw2ehIvzYla'
    },
    {
      email: 'Dell_Reichel@yahoo.com',
      username: 'Noe.Bednar99',
      hashedPassword: '$2a$10$SqbuJXJk9IjfLWW08BlKI.qqdOm.ZUtVKIWCX2yKKYidK4XxMJL9a'
    },
    {
      email: 'Roderick11@hotmail.com',
      username: 'Katrine81',
      hashedPassword: '$2a$10$oQBrs5RW1LQIeDZdCGszBuUAZ103mZKD0Qp7s7D8SjJJVGXRx5QXi'
    },
    {
      email: 'Kiarra.Metz@hotmail.com',
      username: 'Leilani30',
      hashedPassword: '$2a$10$/rFQEfFERx2WoiZ.y6VWU.M/jOrrqWakkT.GtfT1IHhPbRuOrUhBm'
    },
    {
      email: 'Michelle.Gusikowski45@hotmail.com',
      username: 'Emmitt70',
      hashedPassword: '$2a$10$hOgzq4pOYyYgDVFQbtWJKO3l93PoTtx9zR9/1DQ5f41R5X1lXrSam'
    },
    {
      email: 'Lillian_Feest13@gmail.com',
      username: 'Alyce.Roob23',
      hashedPassword: '$2a$10$vKl1OsdiQ7B1TJKLhksjXOk/2VsdkqgvREtQPeSJ/uXXzBq2dgKPy'
    },
    {
      email: 'Alfredo54@gmail.com',
      username: 'Eleanore0',
      hashedPassword: '$2a$10$veoNDIRy7x/kKy7cuKUW4uaeOBPoueed9qTUJbplkM0TZyjsiLqIe'
    },
    {
      email: 'Scarlett_Kuhic3@hotmail.com',
      username: 'Rex.Douglas84',
      hashedPassword: '$2a$10$Rezy8y6c3Kg0PxmZw2vdQO45lRvPUOiXtAUM4syn76rJUvZKzZ1Ze'
    },
    {
      email: 'Josiane.OConnell19@yahoo.com',
      username: 'Leanna.Gislason47',
      hashedPassword: '$2a$10$VPo9z8vC3ECa/cqO1PA.d.JJfmHAPmNpGHpLVsrhJMJlJojU7trsK'
    },
    {
      email: 'Cruz_Jast@hotmail.com',
      username: 'Uriel_DAmore82',
      hashedPassword: '$2a$10$cH8Q6tekGE4RaOT28QrPSOeBMquKDHj9s1jTFvXozdN19x6zv/H/y'
    },
    {
      email: 'Theresa95@hotmail.com',
      username: 'German_Hermiston',
      hashedPassword: '$2a$10$GVlcBWGpVqyU5wiHjckMYOYbDRPsIQKbRY6LO66P3MxTq5k3jS3Y.'
    },
    {
      email: 'Tamia.Tremblay16@gmail.com',
      username: 'Aglae4',
      hashedPassword: '$2a$10$AZdhyBEver.lHrCOruyJye8KvMl.dPpyG9Ynqc10AbR3Tp9lvSLbG'
    },
    {
      email: 'Vernice41@yahoo.com',
      username: 'Jared.Franecki29',
      hashedPassword: '$2a$10$NfTVqz5/Jqsd7AwaY7A9NeTMrjMrr6EP2SiX.3IfJI87NdhksCt4O'
    },
    {
      email: 'Kaylie_Goodwin@hotmail.com',
      username: 'Tillman.Leffler',
      hashedPassword: '$2a$10$Ef9p.5/OZqkjhstfnfc6oeHp3vVV8I6w4zh3MHO2F63ILD86ykgRm'
    },
    {
      email: 'Rey_Cremin69@hotmail.com',
      username: 'Alysa.Conroy',
      hashedPassword: '$2a$10$jXOEd.zMmwoXWfCOTpF2cefXEXe0..iMwzHDvh56FPZwrVSn4lrTe'
    },
    {
      email: 'Annabel17@hotmail.com',
      username: 'Chadrick51',
      hashedPassword: '$2a$10$v2ZORK2cmxIbAsy6ASeW8O8DkLly3LE.fra3zN.PmoBaSW/r5HnPm'
    },
    {
      email: 'Damon82@gmail.com',
      username: 'Rafael_Heaney35',
      hashedPassword: '$2a$10$INX5v8KaZEErX2HArpwbUOB1LIygri9hj5CmvQhP2iF7B5lx6NsAC'
    },
    {
      email: 'Shany7@yahoo.com',
      username: 'Deshawn0',
      hashedPassword: '$2a$10$PzoGMT5JT4LHVn4CfW8.ROvis25kpR9Kfk34qsHYN.ryxZBveVk9S'
    },
    {
      email: 'Alfredo_Doyle@yahoo.com',
      username: 'Arturo_Rippin',
      hashedPassword: '$2a$10$4ofql2dJbxI0F6s/AooiB.DZny3Ui1o7aS6YKnuKxtQxSYSBaeZMO'
    },
    {
      email: 'Kelton70@hotmail.com',
      username: 'Elza_Schiller39',
      hashedPassword: '$2a$10$JlNaLPeejuLm5PkFXRG9k.UzHV46PWlXpPjpOTYtx75psc234En/W'
    },
    {
      email: 'Alexandra18@yahoo.com',
      username: 'Aracely.Ortiz',
      hashedPassword: '$2a$10$JfvuG/vq/p8tJjszrtN.4eP91Ys48MKNkULmvIdn6K0hKQGKe3q7W'
    },
    {
      email: 'Percival4@hotmail.com',
      username: 'Ulices73',
      hashedPassword: '$2a$10$goeNEiZL1xgPINnzE0xYCOLc7Syx2svSAumSNv251wPycQg3DP0j2'
    },
    {
      email: 'Bruce_Klocko99@gmail.com',
      username: 'Lenny95',
      hashedPassword: '$2a$10$6z9unkthUtGY67JiMICfAuAKsxlH003Mw39oimplERbzAu7evCXiy'
    },
    {
      email: 'Zechariah.Anderson7@hotmail.com',
      username: 'Myrtis_Bartell',
      hashedPassword: '$2a$10$vO9r/OEgmo2aR/pPQSXsNOtJkZs2pK4LmnT6fYy7xk6.3Bglq1jjK'
    },
    {
      email: 'Libby_Heathcote@gmail.com',
      username: 'Caleb_Schiller32',
      hashedPassword: '$2a$10$tZrPMvZIJCftCEcpgE3pNevw5lgeurWVcmkpzAJ.5DGi0/i/M.dxu'
    },
    {
      email: 'Deven0@gmail.com',
      username: 'Maxie.Gleichner',
      hashedPassword: '$2a$10$IcYxyfX1lKpq2PDJr57auucmwMSp5gMxsakZ5wu4ctqT1QvSSZG.e'
    },
    {
      email: 'Aleen_Howe@gmail.com',
      username: 'Bradley_Ebert',
      hashedPassword: '$2a$10$azlE5YHjpheUyN7z0445YeJmN11IdOrVhu05qsx8mWPNgfPMU79Em'
    },
    {
      email: 'Michaela_Windler@gmail.com',
      username: 'Sonia69',
      hashedPassword: '$2a$10$GuzpXBBCI2IkHSF9K3lOzuqdSDA4Kut.ASzEvv8JOMyOSZcCiZD7W'
    },
    {
      email: 'Wilfrid.Pollich@yahoo.com',
      username: 'Deshaun56',
      hashedPassword: '$2a$10$Ea5L9rW9xH2xPp0mVCgX3.TPk.5fDoJhPlGODSisL5irQ3O3jqu2S'
    },
    {
      email: 'Olin29@gmail.com',
      username: 'Shaniya_Stokes92',
      hashedPassword: '$2a$10$tqPBlEe1sGQ.vq7pA9gZ/.sP2Cw18Y3nr02sP3.WowS0HNo.zSPau'
    },
    {
      email: 'Cornell.Connelly83@yahoo.com',
      username: 'Marie_Windler',
      hashedPassword: '$2a$10$TtugWgZWxIrY9NzBiT0UVejaasfVJzuZv0ce9iDU4uyuNBDaV4aeC'
    },
    {
      email: 'Rae68@yahoo.com',
      username: 'Jameson84',
      hashedPassword: '$2a$10$FU0l/aVCnxM9vP7P/dsBfeSCjPZgn.9NSWw0jNkpdebeuiZ5.csni'
    },
    {
      email: 'Lexi_Kemmer@gmail.com',
      username: 'Ed29',
      hashedPassword: '$2a$10$fP09xB5JupiBdtKJMzynv.ESqMabAuRqSFRe.rc9EpqLwntCBBX0G'
    },
    {
      email: 'Rebecca_Becker6@gmail.com',
      username: 'Vallie_Glover61',
      hashedPassword: '$2a$10$YNVx777Cuc3lPHCMBwifY.Yq9u0wXwiJP1doTjye9oLrP8YKxhxE2'
    },
    {
      email: 'Joana.Jakubowski7@gmail.com',
      username: 'Zoie.Russel',
      hashedPassword: '$2a$10$V0bVWFJuz0LoCOQsJdxdUey0v0mdLJ9J23imvFg9eH4ftyJK7YzBe'
    },
    {
      email: 'Johnny85@yahoo.com',
      username: 'Jerod_Cummerata57',
      hashedPassword: '$2a$10$hzhPbihkJD8Gq0UyRjwDN.HgJjrXdssWD5LUVxyihO6PgN.iNk1gO'
    },
    {
      email: 'Wilhelmine74@yahoo.com',
      username: 'Dario_McClure',
      hashedPassword: '$2a$10$t.bHxoAsbf1I5EylPHWwYOwi6iGd5TKl/zi4WPB6/YRaoWZq9GIKa'
    },
    {
      email: 'Natalie.Bartell98@hotmail.com',
      username: 'Kim_Mueller45',
      hashedPassword: '$2a$10$zuHsxbOS8oYAn20J0cLCl.BXAcOT1Zf2W5LIyL0iZBCfSzo1lp4wa'
    },
    {
      email: 'Maya_Waters15@gmail.com',
      username: 'Riley10',
      hashedPassword: '$2a$10$zv4STIOa77BU5pMvyNPQ5uAh8HRveI/I5ak2gN8mHLEbMCXCAgGse'
    },
    {
      email: 'Keith.Strosin@yahoo.com',
      username: 'Mae23',
      hashedPassword: '$2a$10$pvP/LCNn2yJbxGrsDPnE..LOwsgAr0LSiWOE2lCqcPWi/ZcaurgEq'
    },
    {
      email: 'Audreanne50@hotmail.com',
      username: 'Emmanuelle.Stoltenberg72',
      hashedPassword: '$2a$10$jppRRyN4pTCbjRAoesTABeRQYgBjBKarI0lMWYtAuEZUQcFI7Ogn2'
    },
    {
      email: 'Wade_Hand@gmail.com',
      username: 'Ashtyn99',
      hashedPassword: '$2a$10$q/hF8pvqKRYA.NdtrUAzDO6BbVbKNyf64GdfGLh/rUMJM5VZM3ThC'
    },
    {
      email: 'Rogelio_Streich70@gmail.com',
      username: 'Lolita_Veum94',
      hashedPassword: '$2a$10$KwFIVw5LZiyWu0gWr6FBNOHhPpcWRfH4R2u7lSut1wIljXURuSLBu'
    },
    {
      email: 'Eunice74@hotmail.com',
      username: 'Marc.Schumm',
      hashedPassword: '$2a$10$j6cHSwgt1LTLDYWfFjjHPe9s0lnb2ydBb1RVGjcMDdSjL2cPDCmge'
    },
    {
      email: 'Vesta.Nienow@hotmail.com',
      username: 'Dorothy.Skiles84',
      hashedPassword: '$2a$10$XQ0i.XH0UCEY9ybad2KVl.BAcc7XcWz5aIWrPKY.VM4LhpNLmaNvO'
    },
    {
      email: 'Zane15@yahoo.com',
      username: 'Jaren8',
      hashedPassword: '$2a$10$Ftsaq.fMbul3n.INLAkbj.lG6jAS2b/THu6V8jyXkmJZ72YmVmLbm'
    },
    {
      email: 'Otilia_Haag52@yahoo.com',
      username: 'Etha.Fay52',
      hashedPassword: '$2a$10$RP2LeyxXs7HsDljgudJPp.h/VGOz88DSvGV8YfLm.6ynV8LbvsHfO'
    },
    {
      email: 'Ines_Ernser88@gmail.com',
      username: 'Jaden_Williamson',
      hashedPassword: '$2a$10$OpkS3UNdcLlDy.ENkAcnBOqA5SBRbDmTm9eYDiakaugEcS4A20Mmm'
    },
    {
      email: 'Raven.Jerde@hotmail.com',
      username: 'Jeffery84',
      hashedPassword: '$2a$10$Ijlp/0G8ImkTNjkoQRl/3eWp3beXUOZARhesRFq0tUaGtAyqAOgA2'
    },
    {
      email: 'Aryanna_Toy@yahoo.com',
      username: 'Claire_Stehr90',
      hashedPassword: '$2a$10$bxA8pFtT/djRidOcL4AJzuJqedTDrJaWweC6KCWgS6XjpylPiN84K'
    },
    {
      email: 'Jennifer.Batz85@gmail.com',
      username: 'Marcos10',
      hashedPassword: '$2a$10$Ht3i6mZGlsyfyAdtcbOvPOSo6ZMMbAKN4c18vfG8dWI5AlDSKBXdS'
    },
    {
      email: 'Maudie_Larson84@hotmail.com',
      username: 'Leopold.OConnell14',
      hashedPassword: '$2a$10$fuXo9IUM6PSxxYfBLNnTre3CBIfXjf6FmBgzNo6fOy6ADD5D7Wuf6'
    },
    {
      email: 'Elsie.Stark@gmail.com',
      username: 'Ardella6',
      hashedPassword: '$2a$10$FQfvvz0OkQDTVCPp8/xJRuld7u2W.n9FjCS0SIFhG6zv/afGxSWzW'
    },
    {
      email: 'Colby17@yahoo.com',
      username: 'Antonette.Schroeder',
      hashedPassword: '$2a$10$SJ..4yG1YptFOGNIbkMEFOfUaIL7Op.Ie0uaGh0q8i8iS132BqQL.'
    },
    {
      email: 'Johnpaul_Erdman48@hotmail.com',
      username: 'Kevon70',
      hashedPassword: '$2a$10$VO4dhtj/AigI9o.ix00lYO9makCJismnTs3ob22bDMWWMTSuRI7SG'
    },
    {
      email: 'Hazle_Russel83@gmail.com',
      username: 'Janessa3',
      hashedPassword: '$2a$10$FYM24sizmqJFUMnsCV/E9u4DQ7Z3Y0ICQ1T7AUqjQ6al/nK1zbZzK'
    },
    {
      email: 'Chadrick.Jones@yahoo.com',
      username: 'Maximillia.Stark',
      hashedPassword: '$2a$10$I5m8GhvzykWjZfFOqAUZjeZLFJT0C30x0l7fvNVWreRxhiT//ZxN6'
    },
    {
      email: 'Donna.OKeefe@yahoo.com',
      username: 'Viviane_Lebsack63',
      hashedPassword: '$2a$10$HCICE27w9ecrG8zMI98.nOejCWqNrkaAbLQcSSSnretvlKN4Sw3kK'
    },
    {
      email: 'Leo_Hagenes@gmail.com',
      username: 'Elmore_Dach62',
      hashedPassword: '$2a$10$pR3.rv2Jdm1rZ4HulLtCJu3wpKOt4d1jbLGMdeHgHKjMsAFytKncm'
    },
    {
      email: 'Herminio_Hintz28@yahoo.com',
      username: 'Lucinda.Weissnat',
      hashedPassword: '$2a$10$psCQFOkm/xLUoRgZEoBEMepCFCkqjCx4dZN7.usqRYS.YxBIqdQBK'
    },
    {
      email: 'Albertha_Goyette56@yahoo.com',
      username: 'Walter17',
      hashedPassword: '$2a$10$FMMS4IDV92tqeMH4IItVduvDZZm9Fbs.flSzF4Dh8qmOajs6D2T8a'
    },
    {
      email: 'Rylan86@gmail.com',
      username: 'Gust_Wilkinson',
      hashedPassword: '$2a$10$n2noXbrG97MmoUNfFjFVP.u80YFqkpKgmgZpTY9onJkpH.RxCAL22'
    },
    {
      email: 'Efrain.Stehr@hotmail.com',
      username: 'Damon.Ankunding72',
      hashedPassword: '$2a$10$nx6WYxuuFuUTCixIVhIopu3znmLIpLAKzZpkBFbJKiGrPk9ikeHXe'
    },
    {
      email: 'Bette_Ondricka98@gmail.com',
      username: 'Mia.Keebler',
      hashedPassword: '$2a$10$vCW8mslYHlt/dx2r.XFVDub720z6g3KNAxzgWlEMcQEPOHd3jQXm6'
    },
    {
      email: 'Audrey.Lubowitz16@gmail.com',
      username: 'Deshawn.Rice95',
      hashedPassword: '$2a$10$80dgD4MNSosgTchF7SwYI.JhGqaRwAHnUGa/Jft63tG.2fV/.ICbG'
    },
    {
      email: 'Alayna.Turner@gmail.com',
      username: 'Garnett_Harber32',
      hashedPassword: '$2a$10$jh0EPnah5QIORAQyL8uKq..GnYeLEcpOaioRyw4cSc61TMzoxwQte'
    },
    {
      email: 'Jammie_Gislason43@gmail.com',
      username: 'Onie.Murray',
      hashedPassword: '$2a$10$twEp7OLepIxuuVgsAxzrXe6AcQCSqJPn5LDpNPxgvj2Moba345Eja'
    },
    {
      email: 'Wyatt.Schneider@hotmail.com',
      username: 'Aditya.Wehner',
      hashedPassword: '$2a$10$kBLM/f.nHtQzEAwGF.vc2euGDFh8lUOuW3kE8UV80iZSQndynMj.2'
    },
    {
      email: 'Jamal12@yahoo.com',
      username: 'Madonna_Haley50',
      hashedPassword: '$2a$10$3S04/NH3F6wk1j73MLubTehoSei4shoOiz/q.H/O6XT0kU9v23O4G'
    },
    {
      email: 'Justine.Leffler@hotmail.com',
      username: 'Mozelle.Huel91',
      hashedPassword: '$2a$10$8ACF3FvahovCikda3rs9reM3L/7GvY2AS0nhzffHfUAk/eNXEW9.6'
    },
    {
      email: 'Lilly_Jerde@gmail.com',
      username: 'Kris93',
      hashedPassword: '$2a$10$iKGQsHeY6qfbOK521BY6O.5L/Be5px0rmLMTYyTs3NBKIH6neF1BG'
    },
    {
      email: 'Bethel_Swift18@gmail.com',
      username: 'Mike54',
      hashedPassword: '$2a$10$CXFojOLNNGmsEe0PcsgTOuIsOwjG4IUGlukVcpf1432GIuH5EgH/O'
    },
    {
      email: 'Alexanne_Bernier90@hotmail.com',
      username: 'Lacy73',
      hashedPassword: '$2a$10$6mI4.UKfKD7iLuUHwLD.Cu.AStMcsMQr97jys8m0LAVjDZpdBhlKC'
    },
    {
      email: 'Ladarius62@gmail.com',
      username: 'Clemmie.Bechtelar18',
      hashedPassword: '$2a$10$GBkb4a5SsejK3D.nciXP5uziVeelXjNuBkCgrDGLINGfVO9JILQR6'
    },
    {
      email: 'Celestino.Beer@gmail.com',
      username: 'Libby.Rogahn17',
      hashedPassword: '$2a$10$vWetTAX8JPqkfzUcJBONd.jxBJpRUfFtBSSDZ9z/RDmKSFXugHnWe'
    },
    {
      email: 'Dessie74@yahoo.com',
      username: 'Quinten46',
      hashedPassword: '$2a$10$tc.HpoQwGKhM5k/qXZC1HOsy4x9q1pmvAm84jZKRmAhCH5MIAE3hi'
    },
    {
      email: 'Kaci_Gleichner99@gmail.com',
      username: 'Annetta.Orn75',
      hashedPassword: '$2a$10$dJzwaL3tM2Qpz3W9H.u70.bkO04akmeZtzwE0JKaZ0wP2jTOGqOHS'
    },
    {
      email: 'Brennan96@gmail.com',
      username: 'Mona27',
      hashedPassword: '$2a$10$.d8fj8m8gRDhrxyE/AqFr.riBvTQVA5/2WVFYgdghm56GdnZ7ikg.'
    },
    {
      email: 'Stanley.Lueilwitz@hotmail.com',
      username: 'Chesley_Homenick',
      hashedPassword: '$2a$10$9cvwNL5MuSIhAI4ZsEII8Ox/roK5x9lDILmo89tZohPJXppz2MnCe'
    },
    {
      email: 'Astrid.Rogahn@yahoo.com',
      username: 'Jazmin96',
      hashedPassword: '$2a$10$dOxiEH/sFnDodQF.6heciOiHLXGTCMssJ7118m.JynAd0P8MxYoj.'
    },
    {
      email: 'Bernita_Ward@hotmail.com',
      username: 'Brooks.Zieme20',
      hashedPassword: '$2a$10$iZ4l5XY4Ytnbxm459iNRBOdqwrEwWDKD/ImIRMauRkxbnuzV0Rnki'
    },
    {
      email: 'Kelsi34@hotmail.com',
      username: 'Desmond.Marquardt',
      hashedPassword: '$2a$10$6FxnVVGbXyAdHtvtrp9l9uh2dqGmK1D6tqOy3GgxlGfzLuxcqtX/K'
    },
    {
      email: 'Gabe82@hotmail.com',
      username: 'Rosendo_Ziemann7',
      hashedPassword: '$2a$10$yjJU2Bd7pm/ucYbcY7wKHeDJsdwwAeohPCqymyWgUMVNuQyh1zI1a'
    },
    {
      email: 'Modesta.Vandervort56@hotmail.com',
      username: 'Keira3',
      hashedPassword: '$2a$10$U2eCo4Xrsz/9xqByq4xxt.uy6ZZjxcQ/5ikOaORQkPF5ZOHK1Wg6m'
    },
    {
      email: 'Juwan.Abbott33@gmail.com',
      username: 'Austyn49',
      hashedPassword: '$2a$10$IP/WrvgowOl6/zeWTaZ.IeVNUBgNBgzYTgVLVALXE6qHaBWxXc9tW'
    },
    {
      email: 'Leonard.Will6@gmail.com',
      username: 'Westley.Olson85',
      hashedPassword: '$2a$10$zTV7g8mNm1FGlQnNV8YcdOtvRSJKnLeL7kaD688rlWDCdbQchZo1C'
    },
    {
      email: 'Mae.Herzog@gmail.com',
      username: 'Katrine83',
      hashedPassword: '$2a$10$gi61MikLDLFhHlMOUMEMguMskhlQBT3cCiKC0ioWkio3j6jkD/FoS'
    },
    {
      email: 'Marcia_Considine@yahoo.com',
      username: 'Maeve.Beatty',
      hashedPassword: '$2a$10$.krYfftBf/RGSOuQ3YxvVukaxXSZ6nqPHtYc3Zm3gIAoXudYEry72'
    },
    {
      email: 'Leo.Baumbach93@hotmail.com',
      username: 'Rachelle_Emard',
      hashedPassword: '$2a$10$FlMlWYULHuxVDJ45uFH28.Dq97KtjKmR.ajhPJyzkozNZywE7HhNK'
    },
    {
      email: 'Holly.Torphy@gmail.com',
      username: 'Brant_Gerlach',
      hashedPassword: '$2a$10$fju13BjpFunjn7kG9PRgteJSU7iCCc9cRn02bLhJ19FuFIMIn55d6'
    },
    {
      email: 'Keshawn81@gmail.com',
      username: 'Maye_Connelly',
      hashedPassword: '$2a$10$/gepA2zrIW8BZRXKI3pkuuvjfuVppZiJ7YM9sMZuKr8f35o.9ddeG'
    },
    {
      email: 'Joanie_Koss@gmail.com',
      username: 'Brionna_Lesch',
      hashedPassword: '$2a$10$euK3teFTd7fXOWvb7T2Pd.Cj9CoK2KPu1OuR6e9d15mHSaCFhB4Ku'
    },
    {
      email: 'Tom_Ernser@hotmail.com',
      username: 'Maddison.Little',
      hashedPassword: '$2a$10$jBFK7LGEiGEuu4ah94nqtexqsh6PmCoNG.8uQznzUUAS415ZUz.a6'
    },
    {
      email: 'Sydnie.Spencer@yahoo.com',
      username: 'Tyson42',
      hashedPassword: '$2a$10$o9EhobF0cwobP0SDS/RdE.HWfKLoiH9HN2N/uXgC8b1hETnjYRaKG'
    },
    {
      email: 'Tremayne_Powlowski@yahoo.com',
      username: 'Lonzo.Kunze',
      hashedPassword: '$2a$10$XFY26ZfkALnijGH//KwHcei3dE9kIXu0jGHwrB1cC0JQpiiR0JgJO'
    }], {});
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
