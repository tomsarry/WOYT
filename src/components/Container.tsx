const getClassBtn = (open: Boolean): string => {
  if (open) {
    return "btn-resize less";
  } else {
    return "btn-resize more";
  }
};

const getClassContainer = (open: Boolean): string => {
  if (open) {
    return "container opened";
  } else {
    return "container closed";
  }
};

export { getClassBtn, getClassContainer };
