export type Personal = {
  apellido_materno: string;
  apellido_paterno: string;
  apellidos_empleado: string;
  area_academica: string;
  clave_area: string;
  curp_empleado: string;
  no_tarjeta: string;
  nombramiento: string;
  nombre_empleado: string;
  rfc: string;
  status_empleado: string;
  tipo_personal: string;
};

export const isPersonalValid = (data: Personal[]) => {
  const errors: string[] = [];
  data.forEach((maestro, index) => {
    if (!maestro.apellido_materno && !maestro.apellido_paterno) {
      errors.push(`Algún apellido es requerido en la fila ${index + 1}`);
    }
    if (!maestro.apellidos_empleado) {
      errors.push(`Los apellidos son requeridos en la fila ${index + 1}`);
    }
    if (!maestro.area_academica) {
      errors.push(`El área académica es requerida en la fila ${index + 1}`);
    }
    if (!maestro.clave_area) {
      errors.push(`La clave de área es requerida en la fila ${index + 1}`);
    }
    if (!maestro.curp_empleado) {
      errors.push(`La CURP es requerida en la fila ${index + 1}`);
    }
    if (!maestro.no_tarjeta) {
      errors.push(`El número de tarjeta es requerido en la fila ${index + 1}`);
    }
    if (!maestro.nombramiento) {
      errors.push(`El nombramiento es requerido en la fila ${index + 1}`);
    }
    if (!maestro.nombre_empleado) {
      errors.push(`El nombre es requerido en la fila ${index + 1}`);
    }
    if (!maestro.rfc) {
      errors.push(`El RFC es requerido en la fila ${index + 1}`);
    }
    if (!maestro.status_empleado) {
      errors.push(
        `El status del empleado es requerido en la fila ${index + 1}`
      );
    }
    if (!maestro.tipo_personal) {
      errors.push(`El tipo de personal es requerido en la fila ${index + 1}`);
    }
  });
  return {
    isValid: errors.length === 0,
    errors,
  };
};
