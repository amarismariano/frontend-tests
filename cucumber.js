module.exports = {
  default: {
    require: ["./steps/*.steps.ts", "./steps/world.ts", "./steps/hooks.ts"],
    format: ["pretty"],
    paths: ["./features/*.feature"],
    publishQuiet: true,
  },
};
