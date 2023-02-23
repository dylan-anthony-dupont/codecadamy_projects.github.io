// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum, dna){
    let totalBases = dna.length;
    let obj = {
      _specimenNum: specimenNum,
      dna: dna,
      mutate(){
        for(i in dna){
          let oldBase = dna[i];
          while(dna[i] === oldBase){
            dna[i] = returnRandBase();
          }
        }
        return this.dna;
      },
      compareDNA(anotherSpecimenObj){
        let matchCount = 0;
        for(i in obj.dna){
          if(anotherSpecimenObj.dna[i] === obj.dna[i]){
            matchCount++;
          }
        }
        let percentageMatch = ((matchCount/totalBases)*100).toFixed(2);
        console.log(`specimen #${obj._specimenNum} and specimen #${anotherSpecimenObj._specimenNum} have ${percentageMatch}% DNA in common`);
        return null;
      },
      willLikelySurvive(){
        let CorGcount = 0;
        let answer = null;
        for(i in obj.dna){
          if(obj.dna[i] === "C" || obj.dna[i] === "G"){
            CorGcount++;
          }
        }
        if(CorGcount/totalBases >= 6/10){
          return true;
        }
        else{
          return false;
        }
      },
    }
    return obj;
  }
  let id1 = pAequorFactory(1, mockUpStrand());
  let id2 = pAequorFactory(2, mockUpStrand());
  
  let likelySurvivors = [];
  let likelySurvivorCount = 0;
  let idNum = 3;
  while(likelySurvivorCount < 30){
    let idTest = pAequorFactory(idNum, mockUpStrand());
    if(idTest.willLikelySurvive()){
      likelySurvivors[likelySurvivorCount] = idTest;
      likelySurvivorCount++;
      idNum++;
    }
  }
  // console.log(likelySurvivors);