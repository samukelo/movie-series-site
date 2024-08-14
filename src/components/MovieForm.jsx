import React, { useState } from "react";

function MovieForm({ addMovie }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ name, description, country, category, thumbnail });
    setName("");
    setDescription("");
    setCountry("");
    setCategory("");
    setThumbnail(null);
  };

  const handleFileChange = (e) => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-2 border border-gray-300 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        required
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        type="submit"
      >
        Add Movie/Series
      </button>
    </form>
  );
}

export default MovieForm;
