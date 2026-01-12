import rules from "@/data/config/configurator-rules.json";


type Part = {
  id: string;
  name: string;
  price: number;
};

type Parts = {
  cpus: Part[];
  gpus: Part[];
  rams: Part[];
  drives: Part[];
};

type RuleCategory = {
  allowed: string[];
};

type ProductRule = {
  cpu?: RuleCategory;
  gpu?: RuleCategory;
  ram?: RuleCategory;
  drives?: RuleCategory;
};


export function getAllowedParts(
  productId: string,
  parts: Parts
): Parts {
  const rule = (rules as Record<string, ProductRule>)[productId];

  // brak reguł → wszystko dozwolone
  if (!rule) {
    return parts;
  }

  return {
    cpus: rule.cpu
      ? parts.cpus.filter(cpu =>
          rule.cpu!.allowed.includes(cpu.id)
        )
      : parts.cpus,

    gpus: rule.gpu
      ? parts.gpus.filter(gpu =>
          rule.gpu!.allowed.includes(gpu.id)
        )
      : parts.gpus,

    rams: rule.ram
      ? parts.rams.filter(ram =>
          rule.ram!.allowed.includes(ram.id)
        )
      : parts.rams,

    drives: rule.drives
      ? parts.drives.filter(drive =>
          rule.drives!.allowed.includes(drive.id)
        )
      : parts.drives
  };
}