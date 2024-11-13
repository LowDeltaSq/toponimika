"use client";

import React from "react";
import Place from "./Place";
import TextAnimation from "./TextAnimation";
import Parallax from "./Paralax";
import Modal from "./Modal";

const Places = () => {
  return (
    <div id="jerler" className="h-screen grid gap-24 relative z-30">
      <div className="z-30 text-6xl font-bold justify-center flex items-end text-[#FEAB5F]">
        <TextAnimation>Körıktı jerler</TextAnimation>
      </div>
      <div className="flex justify-between flex-wrap px-40 py-0 relative z-30">
        <Modal
          title="Borovoe"
          imageUrl="/1.jpg"
          desc="Burabai – möldır möldır kölderımen jäne asqaq taularymen äigılı Aqmola oblysyndağy körkem kurort. Mūnda ataqty Sinüha men Kökşetau taulary, sondai-aq mifter men añyzdarğa ainalğan bıregei jartastar bar. Ainala qarağaily ormandarmen qorşalğan Burabai taza auasymen jäne aşyq auada demalu mümkındıkterımen turisterdı tartady. Jergılıktı sanatoriler men demalys ortalyqtary sauyqtyru bağdarlamalary men belsendı oiyn-sauyqty ūsynady: jaiau seruendeu, balyq aulau jäne qaiyqpen jüzu. Burabai - tabiğatpen tynyştyq pen kelısımdı ızdeitınder üşın tamaşa oryn."
        >
          <Place title="Borovoe" imageUrl="/1.jpg" />
        </Modal>
        <Modal
          title="Shalkar"
          imageUrl="/aiyrtau.jpg"
          desc="Şalqar kölı Aqmola öñırındegı eñ körıktı jerlerdıñ bırı. Töbeler men qarağaily ormandarmen qorşalğan ol möldır suy men tynyş atmosferasymen turisterdı tartady. Jazda Şalqar suğa şomylu, balyq aulau jäne belsendı demalu üşın tanymal orynğa ainalady. Qūmdy jağajailar men körkem peizajdar şatyrly turizm üşın tamaşa jağdai jasaidy. Köl sonymen qatar özınıñ bai su asty älemımen tanymal, būl su asty zertteuşılerın qyzyqty etedı. Tabiği tynyştyq pen ormanğa jaqyndyğy Şalqardy jalğyzdyqty qalaityndar üşın tamaşa tañdau jasaidy."
        >
          <Place title="Shalkar" imageUrl="/aiyrtau.jpg" />
        </Modal>
        <Modal
          title="Imantau"
          imageUrl="/imantau.jpg"
          desc="İmantau – Aqmola oblysyndağy özınıñ tūnyq sūlulyğymen baurap alatyn körkem köl men attas tau. Ormandar men töbelermen qorşalğan İmantau kölı möldır suymen jäne bai bioärtürlılıgımen tanymal. Jazda būl jer aşyq auada ıs-şaralardy ūnatatyndardy tartady: balyq aulau, su sporty jäne jaiau seruendeu. Qysta mūnda şañğy men şanamen syrğanau tanymal. Jergılıktı pansionattar otbasylyq demalys üşın jağdai jasaidy. İmantau da ejelgı taipalar turaly añyzdarmen kömkerılgen, būl oğan tarihi-mädeni män beredı.
"
        >
          <Place title="Imantau" imageUrl="/imantau.jpg" />
        </Modal>
        <Modal
          title="Kenesary üñgırlerı"
          imageUrl="/kenesary.jpeg"
          desc="Kenesary üñgırlerı – Burabai ūlttyq saiabağyndağy bıregei tarihi jäne tabiği oryndardyñ bırı. Mūnda täuelsızdık üşın küresken qazaqtyñ soñğy bileuşısı Kenesary han jasyrynğan degen boljam bar. Üñgırler taular men ormandarmen qorşalğan körkem keşen. Būl üñgırlerge baru tañğajaiyp tabiğat körınısterın tamaşalauğa ğana emes, sonymen qatar qazaq tarihy men qaharmandyq oqiğalarynyñ atmosferasyna enuge mümkındık beredı. Jergılıktı ekskursialar han Kenesarynyñ tūlğasy jäne onyñ azattyq qozğalystağy rölı turaly köbırek bıluge ​​mümkındık beredı. Üñgırler tarih pen tabiğatqa qyzyğuşylyq tanytatyn turister arasynda tanymal."
        >
          <Place title="Kenesary üñgırlerı" imageUrl="/kenesary.jpeg" />
        </Modal>
      </div>
    </div>
  );
};

export default Places;
