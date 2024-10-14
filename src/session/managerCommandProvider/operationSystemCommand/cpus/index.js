import os from "os";
function checkCpus() {
  const cpus = os.cpus();
  const cpuCount = cpus.length;
  console.log(`Overall amount of CPUs: ${cpuCount}`);
  cpus.forEach((cpu, index) => {
    const model = cpu.model;
    const speedGHz = (cpu.speed / 1000).toFixed(2); // Преобразуем MHz в GHz и округляем до двух знаков после запятой
    console.log(
      `CPU ${index + 1}: Model: ${model}, Clock Rate: ${speedGHz} GHz`
    );
  });
}
export { checkCpus };
