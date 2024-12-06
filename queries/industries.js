export const getIndustries = async (filters) => {
  const baseUrl = "https://api.findrecruiters.com/graphql";
  const query = `
         query {
            getIndustrySpecialisations {
            industrySpecialisationId
            name
            description
            SubIndustrySpecialisation {
                subIndustrySpecialisationId
                name
            }
            }
        }
      `;
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: filters, // Passing filters as variables
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    return result?.data?.getIndustrySpecialisations || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
