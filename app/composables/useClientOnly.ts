export function useClientOnly() {
  const isClientOnly = ref(false);
  onMounted(() => {
    isClientOnly.value = true;
  });

  return isClientOnly;
}
