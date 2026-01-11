"use client";

type Filters = {
  purpose: string;
  price: string;
  cpuBrand: string;
  gpuBrand: string;
};

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

export default function FilterBar({ filters, onChange }: Props) {
  return (
    <div className="filterBar">
      <div className="filterOption">
        Zastowsowanie:
        <select
          value={filters.purpose}
          onChange={e => onChange({ ...filters, purpose: e.target.value })}
        >
          <option value="">-</option>
          <option value="gaming">Granie</option>
          <option value="creator">Tworzenie</option>
          <option value="office">Biurowe</option>
        </select>
      </div>

      <div className="filterOption">
        Przedział cenowy:
        <select
          value={filters.price}
          onChange={e => onChange({ ...filters, price: e.target.value })}
        >
          <option value="">-</option>
          <option value="low">Low-range</option>
          <option value="mid">Mid-range</option>
          <option value="high">High-range</option>
        </select>
      </div>

      <div className="filterOption">
        Producent CPU:
        <select
          value={filters.cpuBrand}
          onChange={e => onChange({ ...filters, cpuBrand: e.target.value })}
        >
          <option value="">-</option>
          <option value="cpu-amd">AMD</option>
          <option value="cpu-intel">Intel</option>
      </select> 
      </div>

      <div className="filterOption">
        Producent GPU:
        <select
          value={filters.gpuBrand}
          onChange={e => onChange({ ...filters, gpuBrand: e.target.value })}
        >
          <option value="">-</option>
          <option value="gpu-amd">AMD</option>
          <option value="gpu-nvidia">Nvidia</option>
      </select> 
      </div>
    </div>
  );
}
