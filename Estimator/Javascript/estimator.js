function calculateWallArea() {
  const lengthMM = Number(document.getElementById("length").value);
  const heightMM = Number(document.getElementById("height").value);

  if (!lengthMM || !heightMM || lengthMM <= 0 || heightMM <= 0) {
    alert("Enter valid wall dimensions in millimetres.");
    return;
  }

  const lengthM = lengthMM / 1000;
  const heightM = heightMM / 1000;

  const areaM2 = lengthM * heightM;
  const areaMM2 = lengthMM * heightMM;

  const BLOCKS_PER_M2 = 10;
  const BLOCKS_PER_CEMENT_BAG = 30;
  const SAND_TONNES_PER_M2 = 0.02;

  const blocks = Math.ceil(areaM2 * BLOCKS_PER_M2);
  // const cement = Math.ceil(blocks / BLOCKS_PER_CEMENT_BAG);

  const cementExact = blocks / BLOCKS_PER_CEMENT_BAG;
  const cementBags = Math.ceil(cementExact);
  const sand = (areaM2 * SAND_TONNES_PER_M2).toFixed(2);

  document.getElementById("blocks").textContent = blocks;
  //document.getElementById("cement").textContent = cement;
  document.getElementById("cement").textContent =
  cementExact.toFixed(2) + " bags (buy " + cementBags + ")";
  document.getElementById("sand").textContent = sand;

  document.getElementById("areaMM").textContent = areaMM2;
  document.getElementById("areaM").textContent = areaM2.toFixed(2);
}
