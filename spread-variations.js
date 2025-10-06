  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value for brevity
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Dynamically update the property corresponding to the input's name
    }));
  };

  const updateFName = () => {
      setFormData({ ...formData, firstName: 'Bob' }); // Creates a new object
  };

  const updateLName = () => {
      setFormData(prevObject => ({ ...formData, lastName: "Jones" }));
    };

In this example, setFormData(prevObject => ({ ...prevFormData, [name]: value })) creates a brand new object. 
The ...prevFormData part copies all properties from the prevUser object into the new object, and then [name]: value overwrites the input name property (dynamically) with the new value. This new object is then passed to setFormData, triggering a re-render.

There are 3 different forms of using the "spread" operator, all with the same outcome:
setFormData((prevFormData) => ({ ...prevFormData, [name]: value, }));
setFormData(prevObject => ({ ...formData, lastName: "Jones" }));
setFormData({ ...formData, firstName: 'Bob' });

Note* "prevFormData" and "revObject" are arbitrary namings for the array to be passed to the setFormData state method. In fact, the last example, 